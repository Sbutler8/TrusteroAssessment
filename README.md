
<br />
<p align="center">
  <a href="https://trusteroassessment.herokuapp.com/home">
    <img src="https://analogtodigitaldash.s3-us-west-1.amazonaws.com/SplashPage.png"  alt="Logo" width="auto" height="120">
  </a>
  
<h1 align="center"> Trustero Assessment </h1>

This Todos List web application gives users the ability to create new tasks associated with individual lists of their choosing. Need to expand on those tasks? No worries! Users can simply add individual comments to each task. Using the easy-to-use toggle, users can keep track of which tasks are in progress and which are completed. This feature rich app doesn't stop there. No longer need the comment, task or list created? Users have the ability to remove any which one they would like. Login using the pre-loaded demo user to experience this feature-rich app now! [here](https://trusteroassessment.herokuapp.com/home).

### Built With

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>
<a href="https://devdocs.io/css/"><img alt="CSS3" src="https://img.shields.io/badge/-CSS3%20-61DAFB?style=flat-square&logo=CSS3&logoColor=white&color=brightgreen"/></a>
<a href="https://devdocs.io/html/"><img alt="HTML5" src="https://img.shields.io/badge/-HTML5%20-61DAFB?style=flat-square&logo=HTML5&logoColor=white&color=blue"/></a>
<a href="https://github.com/d3/"><img alt="d3" src="https://img.shields.io/badge/-d3%20-orange?style=flat-square&logo=d3%20&logoColor=white" /></a>

#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://flask-socketio.readthedocs.io/en/latest/"><img alt="Flask SocketIO" src="https://img.shields.io/badge/Flask%20SocketIO-Flask%20SocketIObrightgreen" /></a>
<a href="https://socket.io/docs/v3/index.html"><img alt="socket.io" src="https://img.shields.io/badge/socket.io-socket.io-red" /></a>

#### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>


### Installation

1. Clone the repo `git clone https://github.com/Sbutler8/TrusteroAssessment`
2. Change directories `cd TrusteroAssessment` 
3. Create root .env file based on example .env-example file `touch .env`
4. Create frontend .env file based on example .env-frontend-example `cd react-app/ && touch .env`
5. Install backend dependencies `cd TrusteroAssessment/react-app/ && pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
6. Install frontend dependencies `cd ../react-app && npm install`
7. Start virtual environment in frontend `cd .. && pipenv shell`
8. Apply the migration to the database `flask db upgrade`
9. Seed the database `flask seed all`
10. Start backend `flask run`
11. Open new terminal and start frontend `cd ../react-app && npm start`
12. Open browser to http://localhost:3000/

### Features
#### 1. User Authentication login on custom Splash Page
#### 2. User login pre-filled sign in fields
#### 3. Modulized routing for lists, tasks, and comments
#### 4. Pre-seeded data for each user in order to see the application in full
#### 5. Home page rendering view of all lists and tasks associated with each list
#### 6. Ability to delete list with all tasks and comments deleted with it
#### 7. Ability to view task details in context modal with title, description, and comments
#### 8. Ability to add comments 
#### 9. Ability to delete comments 
#### 10. Custon small navBar for logging in and out

### Additional Things To Tackle
#### 1. Edit List Title
#### 2. Fix task toggle to change to green when task complete
#### 2. Further front-end to work on and make aesthetically pleasing
#### 4. Show changes made with re-render (Just need to add a few dependencies to useEffect())


![Alt text](https://analogtodigitaldash.s3-us-west-1.amazonaws.com/Trustero.gif)

