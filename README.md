# stock-watch-node
A http server implemented using Node JS that returns stock data in JSON format.

## Pre-requisites for running the application
After downloading the code run the following npm command from "stock-watch-app-node" folder. This command will install the [Typscript Definition Manager](https://www.npmjs.com/package/typings)

`npm install typings --global`

Change the working directory to "stock-watch-app-node\src" and run the following command. This command will download the Node JS Typscript Definition files. It also creates typings.json file.

`typings install dt~node --save-dev --global`

