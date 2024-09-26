Express User Management App

This is a backend application built using Express.js and EJS for templating. It allows users to post their name, email, age, and image (profile picture) and stores this data in an online MongoDB Atlas cluster. Every time the app is opened, it displays all the users stored in the database on a dedicated page.

Features
. Add a user with name, email, age, and profile picture.
. View all users stored in MongoDB on a user listing page.
. Uses MongoDB Atlas for cloud storage of users' data.
. Templating engine: EJS.
. Express.js for server-side logic.

Prerequisites
. Node.js
. MongoDB Atlas Account
. A MongoDB Atlas Cluster

Installation
1. Clone the repository:
git clone https://github.com/ankitbisht020/backend_app_2.git

2. Set up MongoDB Atlas:
. Create a MongoDB cluster on MongoDB Atlas.
. Create a database and collection for storing user information.
. Whitelist your IP address to access the database.
. Obtain the connection string for your MongoDB cluster.

3.Create a .env file in the root directory and add the following:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
PORT=3000

4.Start the server:
npm start
Open your browser and go to http://localhost:3000.

How It Works
. Homepage: The homepage displays a form where users can input their name, email, age, and upload a profile picture.
. Submission: Upon submission, the user data is sent to the server and saved in the MongoDB Atlas cluster.
. User Page: All the submitted users are displayed on a user listing page that shows their name, email, age, and profile picture.

Routes
. GET /: Displays the form to add a new user.
. POST /users: Handles form submissions and stores user data (name, email, age, image) to MongoDB.
. GET /users: Displays all users stored in the MongoDB collection.

Technologies Used
. Express.js: Node.js framework for backend routing and logic.
. EJS: Templating engine for rendering dynamic HTML.
. MongoDB Atlas: Cloud-based MongoDB for storing user data.
. Mongoose: ODM for interacting with MongoDB.


License
This project is licensed under the MIT License - see the LICENSE file for details.

