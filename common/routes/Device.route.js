module.exports = app => {
    const DeviceController = require("../controllers/Device.controller");

    let router = require("express").Router();

    router.post("/create", DeviceController.create);

    router.post("/delete", DeviceController.delete);

    router.post("/", DeviceController.list);

    app.use("/api/device", router);
};