# angular-lib-tester

This project's purpose is to provide a convenient and quick angular app structure in which you can develop and test your next ./angular-lib 

## Getting Started
First things first, clone the repo: 
In a new terminal, execute the following statement to clone the repo: 
`git clone git@github.com:chase2981/angular-lib-tester.git`

Next, install the dependencies: (Don't forget to `cd ./angular-lib-tester` first..)
Run `npm i` or `yarn` to install the dependencies. You don't have to repeat this step within the ./angular-lib itself--because it is setup to use the peer dependencies installed in the invoking app instead (i.e. this app/the angular-lib-tester app)

Finally, start the server!!
Run `npm start` or `ng s` to serve the application using angular-cli server

Or else `npm run serve` in order to build and serve the app using lite-server instead; it should launch your default browser to the relevant location once it is ready. The app should automatically reload when you change any of the source files here as well (http://localhost:3000)

## Additional Info

Build the ./angular-lib:
Run `./angular-lib/build.sh` in order to rebuild the angular-lib directory's src files into a consumable library

Test the ./angular-lib:
Run `./angular-lib/test.sh` in order to run the tests for the angular-lib itself 

- Please Note: If you are unable to run either of the ./angular-lib bash scripts, then you may need to `chmod 777 ./angular-lib/build.sh` and/or `chmod +x ./angular-lib/test.sh` in order to make them executable first


Build the demo-app:
Run `ng b` or `npm run build` to build the demo-app. The `npm run serve` command utilizes the build command in order to serve the demo-app content via lite-server

Test the demo-app:
Run `ng test` or `npm test` to test the demo-app