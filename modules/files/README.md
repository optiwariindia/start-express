# Project: start-express
## A easy way to start a expressjs application for PHP developers
This project is developed to simplify the development of a expressjs application specially for the PHP developers who are willing to switch to expressjs. The project is using expressjs, mongoose and twig to simplify the development of the application.
## Getting Started
To start the project, you need to run the following command:

```npx @optiwariindia/start-express```

This will generate new project in the current directory and add essential files to the project. After execution of this command switch to your project using cd command and then execute the following command:

```npm install```

This will install essential pakcages for the project. You can now open the project in the editor of your choice and start coding.

## Starting the server
### In development mode
To start the server in development mode, execute the following command:

```npm devstart```

The development mode consist of live reloading of the application and the server will be started on port 3000 or PORT environment variable.

### In production mode
To start the server in production mode, execute the following command:

```npm start```

The production mode will not have livereloading, the server will be started on port 3000 or PORT environment variable.

## Using minifier in development mode
### New to gulp
You can use gulp to minify your static files in development mode. to use gulp, execute the following command:

```npm install -g gulp```

and then execute the following command to list available tasks:

```gulp --tasks```

### Run watch to automatically run build tasks
To run watch, execute the following command:

```npm run watch```

or 

```gulp watch```

# Suggestion and feedback
If you have any suggestion or feedback, please open an issue or write to us at <optiwari.india@gmail.com>