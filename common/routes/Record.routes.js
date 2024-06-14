module.exports = app => {
    const RecordController = require("../controllers/Record.controller");

    let router = require("express").Router();

    router.post("/register", RecordController.register);

    router.get("/:device_id", RecordController.records);

    app.use("/api/records", router);
};