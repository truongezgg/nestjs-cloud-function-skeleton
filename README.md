## Installation

```bash
$ npm install
```

# My environment

MacOS Monterey `Version 12.6 (21G115)`
Chip Apple M1

NodeJs `18.15.0 (with npm 9.5.0)`

# Prerequisites

You have to completely understand this documentation before we start.

https://docs.nestjs.com/faq/serverless

1. What is serverless
2. What is cold start
3. ...

# Install google cloud CLI

Google cloud Cloud function quick start and complete "Before begin" step if you don't have install gcloud before:

`https://cloud.google.com/functions/docs/create-deploy-gcloud#before-you-begin`

Run this command to authentication.

`gcloud auth login`

`npm install`

Replace YOU_PROJECT_ID in package.json file with your google cloud `Project ID` (you can find it in project dashboard)

## Running the app in local

```bash
# development
$ npm run start api
$ npm run start api-admin

# watch mode
$ npm run start:dev api
$ npm run start:dev api-admin

# production mode
$ npm run start:prod api
$ npm run start:prod api-admin

# Run as local cloud function
$ npm run prod:api
$ npm run prod:api-admin
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy

```bash
# unit tests
$ npm run deploy:api
$ npm run deploy:api-admin
```

You can change config of function scrips deploy in package.json file. Default config:

- RAM: 256MB
- Min instances: 0
- Max instance: 2

## License

Nest is [MIT licensed](LICENSE).
