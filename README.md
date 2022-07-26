# Start Express
## Quick start your express js application with nodejs
### Getting Started
1. Install nodejs
2. Open Command Prompt
3. Create your project using  one of the method below:

    Run the following command to create multiple projects at a time:

    ```npx @optiwariindia/start-express [project1] [project2] ....```

    Run the command below to create a single project:

    ```npx @optiwariindia/start-express --project [project-name]```

    The above step shall crete the project directory. 

4. Install dependencies

    Now you can switch to your project directory and run the following command to install dependencies of your express application:

    ```npm install```

5. Run the application
    To run the application in development mode you can run command below in your project directory:
        
    ```npm run devstart```

    To run the application in production mode you can run command below in your project directory:

    ```npm run start```

6. Open your browser and navigate to http://localhost:3000/ to see the application
7. Open the directory in code editor of your choice and edit.
8. To minify js/css/ and compile sass files you can run command below in your project directory:
        
    ```npm run watch```
9. The code to connect mongodb using mongoose library is also been added with this project. You can set environment variable named MONGODB to connect to your mongodb server, alternatively it gets connected with http://localhost:27017/database by default. You can comment line no. 16 if you don't want to connect to mongodb.
    
This will automatically build your scripts and styles and reload your application in realtime while in devleopment mode.