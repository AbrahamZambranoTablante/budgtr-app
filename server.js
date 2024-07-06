//import app function
const app = require("./app");

//port configuration and importing from .env
require("dotenv").config();
const PORT = process.env.PORT;

//log the port number in the console

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});