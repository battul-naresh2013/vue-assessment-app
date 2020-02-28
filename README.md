### employee-management-tool -----------
```
Description: This app will be useful for maintating employess in a project.
This app has been implemented with json-server as a fake backend server which handles all crud operations.
Also, VueJS as front end js framework with possible best practices.
It uses vue cli as a Standard Tooling for Vue.js Development.
```

### Installations -------------
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Project setup (loading/importing all required packages)
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

## Setting up vue/cli
```
npm install -g @vue/cli

Note: You can check you have the right version with this command:
vue --version
```

## Install JSON Server
For more details:
https://www.npmjs.com/package/json-server

```
npm install -g json-server
Note: Run in a separate terminal or cmd.
```

## Start JSON Server
```
npm run server
```

## Installation of all required packages
```
npm install
Note: Run in a separate terminal or cmd.
```

## Compiles and hot-reloads for frontend development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Unit test cases
```
npm run test:unit
```

## end to end test cases
```
npm run test:e2e
```

## Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : userRoute.js, getName(), userProfileComponent, payLoad etc..

2) Folder Naming Convention, Components directives in vue : kabab-case
   Example : app-header, <app-header />

3) Vuex Standards:
   a. mutations: ALL_CAPS
      ex: ADD_EMPLOYEE
   b. actions: camelCaseSuffixAction
      ex: postEmployeeAction
   c. state: camelCase
      ex: allEmployees

4) Coding Standards  
   a. kabab-case:
      folder names, vue component directives, css classes etc.
   b. camelCase:
      vue component file names, js variables, objects, functions etc
   c. PascalCase:
      importing npm packages etc.
   d. 


### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. bootstrap and bootstrap-vue:
   With BootstrapVue we can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.
   Please refer below url for more details:
   https://bootstrap-vue.js.org/docs

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.

4. @vue/cli-plugin-e2e-cypress:
   This adds E2E testing support using Cypress.
   Cypress offers a rich interactive interface for running E2E tests, but currently only supports running the tests in Chromium.
   We can see colorful coverage report by opeing ../coverage/lcov-report/index.html via any browser.
   
   Please refer below url for more details:
   https://www.npmjs.com/package/@vue/cli-plugin-e2e-cypress
