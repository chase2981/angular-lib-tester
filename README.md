# angular-lib-tester

This project's main purpose is to provide a conventional angular app structure
from which you can test the ./angular-lib is working as intended in a broader
context, as you continue to make changes to the ./angular-lib.

## getting started
Run `npm i` to install the dependencies.
Run `npm start` or `ng s` to serve the application using angular-cli.
I also setup lite-server, so you can also run `npm run build` or `ng b`,
followed by `npm run serve`, in order to serve without angular-cli.

### building angular-lib
First run `chmod 777 ./angular-lib/build.sh`, followed by `chmod 777 ./angular-lib/test.sh`, (or else `chmod +x ./angular-lib/test.sh`) to make the bash scripts executable
Next run `npm run build-lib` in order to rebuild the angular-lib directories src files into dist files

## testing angular-lib
First run `chmod 777 ./angular-lib/build.sh`, followed by `chmod 777 ./angular-lib/test.sh`, (or else `chmod +x ./angular-lib/test.sh`) to make the bash scripts executable
Next run `npm run test-lib` in order to test the angular-lib itself

## @angular/cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
