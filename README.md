# BadBankApp

Project Title
      BadBank Application

Description/Motivation
    This app was created as a homework project for the front-end with JavaScript part in a web development bootcamp. It was initially built via create-react-app and connected to backend via Express and MongoDB.

Installation Guidelines: Although the app is currently deployed on AWS, it can be used via the React or local server (shown on localport: 8080 in gif) and it requires the following steps: 
        - Clone the repository to your local machine
        - Install node.js
        - Run npm install (to create the node modules) in the project folder
            - Run npm install express
            - Run npm install cors
            - Run npm install mongodb
        - Run node index.js (to start the server) in the project folder (note: if it doesn’t work, try this  -  If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.).  
        - Browse to http://localhost:3000

Technology used: 
     React, Node, JS, HTML, CSS, Express, MongoDB 
     
Features: 
    The project's best features include a dynamic navigation bar but also code specific for user context (i.e., mirroring deposits and withdrawals in the user’s balance). The userContext code can be generalized to other applications where such a functionality is needed IF this app is used without backend, otherwise it uses MongoDB to add new users.

![ReadMEVideo](https://user-images.githubusercontent.com/87343796/160261020-8b04a2bb-ec15-4f91-8d52-01ef8faae805.gif)
