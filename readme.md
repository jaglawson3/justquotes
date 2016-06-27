# Just Quotes App
A solution to your 3rd challenge utilizing primarily the MEAN stack. Crafted by Justin Lawson for Brian Parks of Photobooth.co.

This application is built using MongoDB, Express, Node and EJS. In terms of MVC, this application does separate model, view and controller. Although it is not perfect, it seemed more important to complete this faster rather than perfectly.

## The Model
The data model is relatively simple, each record features three pieces of associated information. An id, a quote and an author, these are stored using MongoDB.

## The View
The view allows the user to see not only quotations already in the database in a group but also individually. It also allows the user to immediately see any new quotes that they have added. I utilized EJS to create the views and to dynamically display and update what the quotes perceived by the user. I utilized VW and VH in the styling to accommodate a variety of screen sizes and used mobile breakpoints to change the sizing of both the quotes and the buttons.

## The Controller
The controller component interacts with both view and model, passing information back and forth between the two and allowing the user to add to the db with limited ability to make changes. I utilized Node and Express to create the controller component in server.js. This takes all the results from the DB and puts them into an array which is then directed between the db and the client facing aspect displayed on the screen.

## Shortcomings
In using MongoDB, each new record is accorded a uid, which I then removed and changed to simple pattern of simple integers. The problem here is that while I can associate previously entered quotes with a single view, I cannot automatically update single views for new quotes added until I manually change the uid to the basic integers represented in the final version. I believe this shortcoming is in relation to my lack of proficiency in backend type work. EJS should be able to represent single quote views in one layout and then dynamically change the quote to reflect the id route the user is viewing. However, I am still learning how to do this and thus it is an imperfect solution. Multiple views are utilized to show the different unique quotes in single quote view. I think this technology supports a viable solution for this problem. I am still developing proficiency in this area though which is what limited the simplicity and thoughtfulness of my solution.

I tried to create a simple UI that made the quotes the primary focal point of the application. A muted color palette was utilized along with a subtle branding strategy. Given more time I would have liked to beef up the UI to be more aesthetically appealing and to make the components of MVC present have a better separation of responsibilities. I included navigation buttons to simplify the experience of using this application. Not including them and relying on the user to type integers manually into the address did not seem right in my mind. This is meant to be easy to understand and use. Simple solutions to these types of problems are usually the best in my mind. While the UI is sufficient, it still could be significantly improved upon in my mind, thus it is a shortcoming.

To run this, simply use npm install to get the dependencies and then run nodemon server.js to start it locally.

You can also find the project deployed live at [https://justquotes.herokuapp.com/]()

Thanks for your time and consideration.

Sincerely,

Justin
