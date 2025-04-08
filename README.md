# RateMyDryer

[My Notes](notes.md)

A website for leaving and sharing reviews of dryers and washers in apartment complexes because I'm sick of accidentally using the bad one. Removed notes on the old website I was building.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://ratemydryer.com/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** 
- [x] **Proper HTML element usage** 
- [x] **Links** 
- [x] **Text**
- [x] **3rd party API placeholder**
- [x] **Images**
- [x] **Login placeholder**
- [x] **DB data placeholder**
- [x] **WebSocket placeholder**

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - The header and footer is the same on each page, and the main body changes
- [x] **Navigation elements** - I spent about 2 hours messing with this, turns out I had just not copied the code to import bootstrap correctly which is why it didn't look good. Should be decent now.
- [x] **Responsive to window resizing** - The two tables (find.html and browse.html) are behaving funky when the screen gets too wide and that I cannot solve on this lack of sleep and looming deadline, however everything else seems to keep looking pretty when the page changes shape into weird shapes
- [x] **Application elements** - There are spans and stuff, could be better probably
- [x] **Application text content** - There is text on there for sure
- [x] **Application images** - I put a little AI generated logo of a dryer with some stars on it. It isn't much but it made a lot of sense in my head.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Used NPM and organized the files in the way that VITE expects
- [x] **Components** - Different pages are different components
- [x] **Router** - The index.jsx routes between pages

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - Everything mocked, except the page where you call an API doesn't actually do anything yet BUT the form to submit info that will be passed to the API works so I think that's the important part for this deliverable? Feel free to correct me.
- [x] **Hooks** - I used useState a lot, I did not use useEffect, I'm not 100% sure I understand what it does BUT from what I do know I don't think I need it for my project? Again, feel free to correct me.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - I set up an express backend following the instructions
- [x] **Static middleware for frontend** - I have my react pages like app.jsx and the various pages from the react deliverable
- [x] **Calls to third party endpoints** - In src/find/find.jsx I call the overpass API to retrieve data on local laundromats
- [x] **Backend service endpoints** - Service endpoints for logging in and out, creating accounts, leaving reviews of dryers/washers, getting reviews stored in the backend.
- [x] **Frontend calls service endpoints** - Login calls login and create account endpoints, once logged in any page can call logout, review page calls review endpoint to add a new review, browse page calls endpoint for getting reviews from the backend

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **User registration** - Creating an account calls mongo to store user info in the database
- [x] **User login and logout** - Logging in and out endpoints call mongo to update user info
- [x] **Stores data in MongoDB** - Backend endpoints call methods from database.js which interact with the mongo database
- [x] **Stores credentials in MongoDB** - User credentials are stored in mongo database
- [x] **Restricts functionality based on authentication** - Verify user endpoint is called before proceeding to other endpoints, such as viewing reviews on washers/dryers or leaving reviews

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Backend listens for WebSocket connection** - I used the same peerProxy idea that simon websocket uses to listen for websocket connections
- [x] **Frontend makes WebSocket connection** - I borrowed the gameEventNotifier class from simon but renamed everything to be less... gamey, the browse and review .jsx files use it
- [x] **Data sent over WebSocket connection** - Review page sends an event notification when a review is left by a user on a washer/dryer
- [x] **WebSocket data displayed** - Browse page shows a popup when another user leaves a review stating the username and apartment complex
- [x] **Application is fully functional** - Roger that. Feels really freakin' good
