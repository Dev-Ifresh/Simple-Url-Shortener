So I am creating a link shortner API for my Altschool Final Project we call this the Capstone Project. 
The Capstone Project consisits of 3 Major Projects. But I will be attempting 2
1. Scissors: A link shortener application
2. Locale: A geo location application

The Scissors is a link shortener application just like bit.ly and tinyurl.ly. The major solution is to convert long url or links into short characters mostly for easy sharing.

What are the REQUIREMENTS for this project.
1. The App must be able to shortner long urls that are accessible even when shared on other platforms(the shortened link must be of 3 to 5 characters)

2. Custom Urls: You want to make it possible that the users can create his own custom shortened URL

3. QR code generation: After create a shortened link, the app should be able to create a QR code version of the same link. So the user can decide to use the QR code instead of the shortened link and it will still take you back to the original URL.

4. Analytics: The whole process goes like this, when someone clicks that shortened link, it points to your platform where you go to your database to bring the original URL tied to this short URL. then the person gets access to the original URL. With Analytics you must be able to track how many times that short link was clicked on your platform.

5. Link History: If I come back to the platform I should be able to see all the link I have created.

6. Basic Auth: Try to Authicate the user, the I can come back and I see all the recent activities I have done.

Best Practices

1. Use NodeJs to build the project
2. Ensure you validate if the URL is valid and accessible
3. Don't always hit the DB, use a cache layer
4. Ensure you write unit and intergration tests when possible
5. Document your APIs
