const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
const authCookieName = 'token';

let users = [];
let reviews = [];

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

class Review {
    constructor(apartment, building, number, date, user, rating, reviewText) {
        this.apartment = apartment;
        this.building = building;
        this.number = number;
        this.date = date;
        this.user = user;
        this.rating = rating;
        this.reviewText = reviewText;
    }
}

class Laundromat {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);
  
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

apiRouter.get('/auth/status', verifyAuth, (req, res) => {
    res.status(200).send({ email: req.user.email }); 
});

//Get Reviews
apiRouter.get('/reviews', verifyAuth, (_req, res) => {
    res.send(reviews);
});

apiRouter.post('/addreview', verifyAuth, (req, res) => {
    try {
        const { apartment, building, number, date, user, rating, reviewText } = req.body;
        
        if (!apartment || !building || !number || !date || !rating || !reviewText) {
            return res.status(400).send({ msg: 'Missing required fields' });
        }

        const review = new Review(apartment, building, number, date, user, rating, reviewText);

        reviews.push(review);

        res.status(201).send({ msg: 'Review added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Internal server error' });
    }
});

//Find Laundromats
apiRouter.get('/getLaundromats', async (req, res) => {
    console.log("In the backend");
    const city = req.query.city;
    const query = `
        [out:json][timeout:25];
        area["name"="${city}"]->.searchArea;
        node["shop"="laundry"](area.searchArea);
        out geom;
    `;
    try {
        const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching laundromats');
    }
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});