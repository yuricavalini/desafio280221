## :tada: How to setup

1.  Clone the repository. For this, you'll need to install Git (https://git-scm.com/), which is a version control system. After the initial setup, run the command:

```bash
git clone https://github.com/yuricavalini/desafio280221.git
```

2. Before we start the application, you'll need to create a database using PostgreSQL (https://www.postgresql.org/) and in order to run our application we'll be using the JavaScript runtime, NodeJS (https://nodejs.org/en/). After finished the initial setup, inside of server folder go to /src/config/env.js and add your database credentials to the file.

3. Now, navigate to the project root directory where you can find the package.json file to install the dependencies. You must run this command below inside of the root directory of both folders, server and web. Run the command:

```bash
npm install
```

4.  Inside of server root folder, run on terminal:

```bash
npm run dev
```

5.  Inside of web root folder, run on terminal:

```bash
npm start
```

You are now ready to go and can access the application on http://localhost:8080/ or the port you specified at server/src/config/env.js. :rocket:

## :page_facing_up: License

Released in 2020. This project is under the [MIT license](https://github.com/yuricavalini/desafio280221/blob/master/LICENSE).

Made by [Yuri Cavalini](https://github.com/yuricavalini). :wink:
