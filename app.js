const express = require("express");
const cors = require("cors");

const authorization = require('./common/middleware/authentication');

const app = express();

const db = require('./common/models');
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync database.")
    })
    .catch((err) => {
        console.log("Failed to sync database : " + err.message);
    });

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello World !" });
});

require("./common/routes/User.routes")(app, authorization);
require("./common/routes/Device.route")(app, authorization);
require("./common/routes/Record.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});