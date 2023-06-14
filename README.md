Here is what I will do to create the URL Shortener

1. Initialize the Folder (npm init)

2. Install packages express, mongoose, ejs, nodemon

3. Start a server (server.js)

4. Set your server to view ejs files anytime called upon

5. Go to your ejs file to create an frontend with HTML and CSS(BOOTSTRAP) for your site

6. After creating the frontend we have to create an endpoint to the form

7. The Logic is for the user to input the original url and we collect it, shorten it, then store it in the Database

8. Next is to connect our server to the MongoDB Database using Mongoose

9. Then we create a model to store all our data in a fixed format

10. We get back to the server.js to import the model

11. Use the POST method to create a new url model everytime the user fill the form with a URL.

12. Meaning everytime the User fills the form with a URl, we take URL store it in the full object of the database, as the shortID library with shorten that URL and also store it in the short object of the database.

13. The clicks will stil be in the default 0.

14. All these will happen at the backend

15. We will need to bring it to display at the front.

16. By rendering our Url model in our ejs file

17. Now that the full, short and clicks are showing. When you try to click the short URL it won't go anywhere, that is because there is no route for it.

18. So we create another route for the short URL 
