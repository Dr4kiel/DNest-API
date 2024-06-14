module.exports = app => {
    const UserController = require("../controllers/User.controller")

    let router = require("express").Router();

    router.post("/", UserController.create);

    router.get("/", UserController.findAll);

    router.get("/:username", UserController.findOne);

    router.put("/:username", UserController.update);

    router.delete("/:username", UserController.delete);

    app.use('/api/users', router);
}