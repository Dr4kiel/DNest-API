module.exports = (app, authorization) => {
    const UserController = require("../controllers/User.controller")

    let router = require("express").Router();

    router.post("/create", UserController.create);

    router.get("/", UserController.findAll);

    router.get("/:username", UserController.findOne);

    router.post("/:username/modify", UserController.update);

    router.post("/:username/delete", UserController.delete);

    app.use('/api/users', authorization, router);
}