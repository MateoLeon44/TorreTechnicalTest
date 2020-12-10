# TorreTechnical

https://torre-technical-test-0.herokuapp.com/

## Concept

The test helps people who post jobs to compare their best fits. By this, people can contact them with ease without having to go with many applications. Right now, if you see console of the best fits section, even though it doesn't show any candidate, it logs the people who fit the job because of their skills (not taking into account other features). 

- The color palette is the same as in Torre.co
- The fonts are the same as the ones used in Torre.co
- The project uses Angular11 (Javascript framework) as front end with material design, Typescript, HTML and SCSS  
- The project uses Express.js (Node.js framework) as backend with MongoDb as database and Jest.js for the tests

## Algorithm implementation

The algorithm implemented to search for the best fit of a job requires more data than what can be seen in the search/people endpoint. Because of this, I need to retrieve the data from each person that fits the skills from the bios/$username endpoint. This makes the algorithm slow, which takes about 20 seconds. If I had the access to the people's databse (or collection or however it's stored), the algorithm would run in O(N). Since this is not the case the algorithm depends hardly on the endpoint searches, which makes it really slow. However, since the algorithm takes the first 100 fits that have the most rank and has all the skills, then it could be slower depending on the amount of people that we woul'd like to be compared with. 

The algorithm goes as follows:

1. We search for the first 100 people who have all the skills (filters) and then organize them depending on their rank in a descendant order. This search is made within a collection of 10000 people in a mongo atlas DB. The rank is an attribute that the search/people gives us, and since looking for the years of experience with the jobs they had would make the algorithm significantly slower (because of how the data is), I assumed that having the best rank (which includes weights of recommendation) could have a direct correlation with the years of experience
2. Now that it's sorted, we make a loop through the array and and search the user with the bios/$username endpoint to get access to more specific data
3. After that we see if the the fit's salary matches with the job's salary expectation. If it doesn't match, then we take te next person, since I asssume that people wouldn't like to get paid less than what they want
4. If the salary matches, I take into account if the user is remote, if the job is remote and a set of variables that will tell me if the user is available to work according to the job's demanding place
5. Since it's sorted, if the user meets the previous requirements, then we can return it and that would be the best match

We can take into account other things, like skills they want to develop and organization size, but that would make the algorithm significantly slower than what it is now. Because of this, I took the decision not to make it this way, since it will reflect in a really slow matter on the app's UI



## How to run the project locally

1. Clone the repository

2. In the root of the project run `npm i` (this is a feature of Node.js, if you don't have if you'll have to install it and configure its environment variable)

3. You can either create your own .env file with the next variables: PORT (port in which the app will run), MONGODBURI (MongoDB connection url, this can either be local or a cloud database like Mongo atlas) and DBNAME (name for the database that's going to be used). The other way is to run your MongoDb process. This needs MongoDb installed locally with its corresponding environment variable and run `mongod` for the process to start running.

4. Run `ng serve` in the root of the project (this needs Angular CLI installed globally). 

5. Open another console in the root of the project and run `node app.js` 

## Deadline commits

Even though, this project was due 6/12/2020 11:30 pm EST, I commited only in the package.json and the read.me, so I could deploy it and show how the project works properly (even though some functionalities are still pending). Sorry for going through after the due date.

After the 24 hours that were given to me (thank you very much), I stopped commiting code and only wrote in the readme, so that's why I have some commits that go after 9/12/2020 0:00 am EST.

## Bugs to fix

When there are no matches, the UI should display a 'We couldn't find the best match for this job' or 'The are no best matches for this job' and 'There are no fits with the skills listed for this job'. This could be easily made with an if in the addPeoplePaginated and the best fit response. The best fit text is not overflowed by ellipsis (CSS), hence I should remove the whitespace: no-wrap from the css and make the ngx-skeleton-loader fit the size depending on the vw property instead of a % property, which would make the page fully responsive. However I can't make anymore code commits, which makes the application have these bugs.

## Improvements

- Implement a cache strategy in the database that helps me retrieve the best option once a user has already searched for (for example, save the job id and the skills). This would make the query much faster.

- Implement front end testing.

- Implement more models, (for example, the job and its derivates) so I can stop using <any>
  
- Delete the .cors from the backend and find an alternative solution

- Implement more smart-dumb/container-presenters in the front-end

- Make the comparte.component.ts class shorter to avoid an anti pattern (large class)

- Implement the backend with Typescript

- Add code documentation
