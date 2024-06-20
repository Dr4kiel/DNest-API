module.exports = (app, authorization) => {
    const DeviceController = require("../controllers/Device.controller");

    let router = require("express").Router();

    router.post("/create", DeviceController.create);

    router.post("/delete", DeviceController.delete);

    router.get("/", DeviceController.list);

    app.use("/api/device", authorization, router);
};