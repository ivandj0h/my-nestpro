# My NestPro

`This Project is still in development`

## Description

This is a simple project to learn NestJS.  
This Project is like a boilerplate and it will be used as a reference for future projects.  


## Installation

```bash
$ npm install
```

or you can `clone` the project and run `npm install` in the project directory.

```angular2html
$ git clone https://github.com/ivandi1980/my-nestpro.git
```

## Running the app  

- Without Docker

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- With Docker

```bash
# build docker image
$ docker build -t my-nestpro .

# run docker image
$ docker run -p 9999:9999 my-nestpro
```

## Swagger

Swagger is a tool that helps you design, build, document, and consume RESTful web services.

- Swagger UI  
  `http://localhost:9999/api`
- Swagger JSON  
  `http://localhost:9999/api-json`


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Screenshots

- Get All Users via Rest Client  
  ![Get All Users](/assets/get_all_users.png)

- Get All User's Posts via Swagger  
  ![Get All Users](/assets/swagger.png)

## License

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If
you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Authors

[ivandjoh](https://linkedin.com/in/ivandjoh)  
[delvin](https://github.com/delvincakep)

## Credits

inspired by [Anson the Developer](https://www.youtube.com/watch?v=xzu3QXwo1BU&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK)
