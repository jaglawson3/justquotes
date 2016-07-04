# Just Quotes App
A solution to your 3rd challenge utilizing primarily the MEAN stack. Crafted by Justin Lawson for Brian Parks of Photobooth.co.

This application is built using MongoDB, Express, Node and EJS. In terms of MVC, this application does separate model, view and controller. Although it is not perfect, it seemed more important to complete this faster rather than perfectly.

## The Model
The data model is relatively simple, each record features four pieces of associated information. An _id utilized by Mongolab(which is a hashed uid), an id which is a simple integer utilized by this app for routing, a quote and an author, these are stored using MongoDB.

## The View
The view allows the user to see not only quotations already in the database in a group but also individually. It also allows the user to immediately see any new quotes that they have added. I utilized EJS to create the views and to dynamically display and update what the quotes perceived by the user. I utilized VW and VH in the styling to accommodate a variety of screen sizes and used mobile breakpoints to change the sizing of both the quotes and the interface. The animation that creates the illusion of shifting cast shadows was fairly successful from my perspective. It add a subtle thoughtful aspect to the UI. I also tried to make things like the form to add quotes, subtly interactive. It rotates just 1.5 degrees in response to user hover. Things like this are important to making a design or in the case the add view more than just boxes and text. It creates an experience.

## The Controller
The controller component interacts with both view and model, passing information back and forth between the two and allowing the user to add to the db with limited ability to make changes. I utilized Node and Express to create the controller component in server.js. This takes all the results from the DB and puts them into an array which is then directed between the db and the client facing aspect displayed on the screen.

## Assumptions
I assumed that the quotes are all English, that the user speaks only english. I also assumed that the user would know the specific url routes to explore the functionality. I assumed that the person utilizing this has access to the internet. I assumed that the user also knows the specific routes to access the different views per the challenge.

## Shortcomings
In using MongoDB, each new record is accorded a uid. The problem here is that while I can associate previously entered quotes with a single view, I cannot automatically update single views for new quotes added until I manually add the id to the basic integers represented in the final version. I believe this shortcoming is in relation to my lack of proficiency in backend type work. I think this technology supports a viable solution for this problem. I am still developing proficiency in this area though which is what limited the simplicity and thoughtfulness of my solution. Currently when a user adds a new quote, it can be viewed on the quotes screen instantly and will also have a new single quote route that display it.

I tried to create a simple UI that made the quotes the primary focal point of the application. A monochromatic color palette was utilized along with a subtle branding strategy around the phrase "Just Quotes" with ink blots, interactivity and animations. Given more time I would have liked to beef up the UI to be more aesthetically appealing to have a tighter layout. I also would have liked to make the components more modular. I initially included navigation buttons to simplify the experience of using this application, but realized this was not what the challenge was asking for. While the UI is sufficient, it still could be significantly improved upon in my mind, thus it is a shortcoming.

To run this, simply use npm install in the console to get the dependencies installed and then run "nodemon server.js" to start it locally. You can also visit the deployed app.

## Routes

/<0, 1, 2 etc.> - will take you to specific individual quote views
/add - this will take you to a view that allows you to add quotes
/quotes - will display all quotes currently in the database
/ - will take you to the default view which presents the first quote in the database

You can also find the project deployed live at [https://justquotes.herokuapp.com/]()

Thanks for your time and consideration.

Sincerely,

Justin
