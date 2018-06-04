# CHALLENGE 02 
Download postman and get information for a superhero from marvel API

First we had to access https://developer.marvel.com/docs register and get an API key.

**Get information related to the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)**

I had to check comic Id so it can be used to access the characters list. For this I used:

https://gateway.marvel.com:443/v1/public/comics?format=comic&title=Cable%20%26%20Deadpool&issueNumber=46&ts=9762&apikey=277bb8457222732e7d30dbab0f3fee9f&hash=cb8869649b118d9704efb639f443be96

Checking the reponse we can se that the comic with the tittle Cable And Deadppol has a variant and its ID is 21845,
After that i requested that specific comic characters informacion. For this I used:

https://gateway.marvel.com:443/v1/public/comics/21845/characters?ts=9762&apikey=277bb8457222732e7d30dbab0f3fee9f&hash=cb8869649b118d9704efb639f443be96

Fially we complete the first part of this week challenge [List of Characters](https://github.com/palpico/papt_jobsity/blob/develop/Challenge02/Format%20Characters.json) 


**Get a list of all stories when Agent X (Nijo) appears**

I had to check character Id so it can be used to access the stories list. For this I used:

https://gateway.marvel.com:443/v1/public/characters?name=Agent%20X%20(Nijo)&nameStartsWith=agent&ts=9762&apikey=277bb8457222732e7d30dbab0f3fee9f&hash=cb8869649b118d9704efb639f443be96

I requested character info which name was Agent X (Nijo).

Checking the reponse we can se that Agent X ID is 21845,

After that i requested the stories in which Agent X appears. For this I used its ID as parameter:

https://gateway.marvel.com:443/v1/public/comics/21845/characters?ts=9762&apikey=277bb8457222732e7d30dbab0f3fee9f&hash=cb8869649b118d9704efb639f443be96

Fially we complete the second part of this week challenge [List of Stories](https://github.com/palpico/papt_jobsity/blob/develop/Challenge02/Format%20Agent%20X%20Stories.json) 


Generate JSON document with this information and push to github [repo.](https://github.com/palpico/papt_jobsity/tree/develop/Challenge02)

