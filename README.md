# Movie Showtimes

## Getting Started
1. Install the ang-cli `npm install -g @angular/cli`
2. `npm install` to install dependencies
3. `ng serve` to run the application
4. `ng test` to run the unit tests

## Running unit tests
I wrote a few basic unit tests to guide my development and ensure that the component and shared service is up and running. I also changed the karma reporter to Nyan cat because I need to see something fun in my terminal.

## What I Was Able to Get Done in Two Hours
1. Working mobile view of application ![mobile-view](https://imgur.com/PmcNc8e.jpg)
2. Working desktop view of application ![desktop-view](https://imgur.com/AtuIeuO.jpg)
3. Unit tests for App Component and Movie Data Service
4. Response model using strong typing
5. Default styling set for mobile
6. Media breakpoints for tablet and desktop views
7. Local server
8. Live reload using `ng serve`
9. Automated unit tests using `ng test`

## Data Structure
I decided to change the `movie_metadata.json` data structure by making the `id` of the movie its key. The reason for this was that it made mapping easier and reduced the number of objects I needed to loop through down to one.

Having the data structures match makes mapping and iteration easier
