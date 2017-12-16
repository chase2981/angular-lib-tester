# angular-lib-tester

This project's purpose is to provide a convenient, quick, and easy-to-understand angular-lib structure from which you can begin to develop and test your own new ./angular-lib. 

This project was built using @angular@5.1.0 and @angular/cli@1.6.0, both of which are strongly geared towards ahead-of-time compilation.

## Getting Started
First things first, clone the repo: 
In a new terminal, execute the following statement to clone the repo: 
`git clone git@github.com:chase2981/angular-lib-tester.git`

Next, install the dependencies: (Don't forget to `cd ./angular-lib-tester` first..)
Run `npm i` to install the dependencies. You don't have to repeat this step within the ./angular-lib directory itself--because it is set up to use the peer dependencies installed in the invoking app instead (i.e. this app/the angular-lib-tester app--less complexity) 

Finally, start the server!!
Run `npm start` or `ng s` to serve the application using angular-cli server
(http://localhost:4200)

Or else `npm run serve` in order to build and serve the app using lite-server instead; it should launch your default browser to the relevant location once it is ready. The app should automatically reload when you change any of the source files using this serve method as well (http://localhost:3000)

## Additional Info

Build the ./angular-lib:
Run `./angular-lib/build.sh` in order to rebuild the angular-lib directory's src files into a consumable library

Test the ./angular-lib:
Run `./angular-lib/test.sh` in order to run the tests for the angular-lib itself 

- Please Note: If you are unable to run either of the ./angular-lib bash scripts, then you may need to run `chmod 777 ./angular-lib/build.sh` and/or `chmod +x ./angular-lib/test.sh`--in order to make them executable first


Build the demo-app:
Run `ng b` or `npm run build` to build the demo-app. The `npm run serve` command utilizes the build command in order to serve the demo-app content via lite-server

Test the demo-app:
Run `ng test` or `npm test` to test the demo-app