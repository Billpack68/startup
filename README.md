# The Silly Websites Website

[My Notes](notes.md)

This project is going to be a website where users can share links to silly websites and vote on their favorite silly websites.

## 🚀 Specification Deliverable -- OUTDATED, OLD SILLY IDEA HERE

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

There are a lot of silly and interesting websites on the web, and sometimes it can be hard to find the one you saw a few years ago, or maybe you've got a few minutes to fill before catching the bus and you want something quick to entertain you. My website will be a link sharing website where users can share links to their favorite silly and interesting websites, and then can vote on the ones submitted by everyone else that they think are the most funny and interesting. 

### Design

![Design image](assets/website_picture.jpg)

Here is a sequence diagram that shows how users will interact with the backend to add links and vote on them

```mermaid
sequenceDiagram
    actor Andrew
    actor Joshua
    actor Sarah
    Andrew->>Server: Add a link
    Server-->>Joshua: Add a link to the list
    Server-->>Sarah: Add a link to the list
    Joshua->>Server: Vote for the link
    Server-->>Sarah: Add a vote to that link
    Server-->>Andrew: Add a vote to that link
```

### Key features

- Secure login over HTTPS 
- Ability to submit new links to the database
- Ability to see links you have previously submitted
- Ability to browse links by total votes from users
- Ability to vote for links that users find funny or interesting
- Ability to see links you have voted for in the past
- Votes and links are stored in a database allowing for them to remain over time and continue to gain votes
- Ability for administrators to remove links from the database that are inappropriate or offensive

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for browsing the links and one for seeing your account information and history.
- **CSS** - Styling that looks good on different screen sizes, is easy to navigate, and color choice that is modest and not distracting
- **React** - Provides login, display of links, applying votes to links, displaying other user's votes, and for routing and components
- **Service** - Backend service with endpoints for:
    - login
    - retrieving links
    - voting on links
    - retrieving vote status
    - linkpreview api to generate previews of links
- **DB/Login** - Store users, the links they have submitted, the links they have liked, as well as how many likes each link has. Users cannot vote unless signed in to an account, and account credentials are store securely in the database.
- **WebSocket** - As users add links and vote on them, the results are broadcast to other users on the site.

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

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
