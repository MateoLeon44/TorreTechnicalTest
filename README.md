# TorreTechnical

https://torre-technical-test-0.herokuapp.com/

## Concept

The test helps people who post jobs to compare their best fits. By this, people can contact them with ease without having to go with many applications. Right now, if you see console of the best fits section, even though it doesn't show any candidate, it logs the people who fit the job because of their skills (not taking into account other features). 

- The color palette is the same as in Torre.co
- The fonts are the same as the ones used in Torre.co
- The project uses Angular11 (Javascript framework) as front end with material design, Typescript, HTML and SCSS  
- The project uses Express.js (Node.js framework) as backend with MongoDb as database and Jest.js for the tests

## Algorithm implementation

The algorithm implemented to search for the best fit of a job requires more data than what can be seen in the search/people endpoint. Because of this, I need to retrieve the data from the bios/$username endpoint. This makes the algorithm slow, which takes about 20 seconds, the rest of them are simply O(N). 

## How to run the project locally

1. Clone the repository

2. In the root of the project run `npm i` (this is a feature of Node.js, if you don't have if you'll have to install it and configure its environment variable)

3. You can either create your own .env file with the next variables: PORT (port in which the app will run), MONGODBURI (MongoDB connection url, this can either be local or a cloud database like Mongo atlas) and DBNAME (name for the database that's going to be used). The other way is to run your MongoDb process. This needs MongoDb installed locally with its corresponding environment variable and run `mongod` for the process to start running.

4. Run `ng serve` in the root of the project (this needs Angular CLI installed globally). 

5. Open another console in the root of the project and run `node app.js` 

## Deadline commits

Even though, this project was due 6/12/2020 11:30 pm EST, I commited only in the package.json and the read.me, so I could deploy it and show how the project works properly (even though some functionalities are still pending). Sorry for going through after the due date.

## Bugs to fix

When there are no matches, the UI should display a 'We couldn't find the best match for this job' or 'The are no best matches for this job' and 'There are no fits with the skills listed for this job'

