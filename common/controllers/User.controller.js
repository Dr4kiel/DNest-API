const db = require("../models/")
const User = db.User;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "I want a username to create a user :( "
        });
        return;
    }

    const user = {
        username: req.body.username
    }

    User.create(user)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while creating the user."
            })
        });
};

exports.findAll = (req, res) => {
    User.findAll({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while retrieving the users."
            })
        });
};

exports.findOne = (req, res) => {
    // no
};

exports.update = (req, res) => {
    const username = req.params.username;

    User.update(req.body, {
        where: { username: username }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "User was updated successfully."
                })
            } else {
                res.status(404).send({
                    message: `Cannot update User named ${username}. Plesae ensure if the user exist.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while updating user with name : " + username
            });
        });
};

exports.delete = (req, res) => {
    const username = req.params.username;

    User.destroy({
        where: { username: username }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete user with name : ${username}. Please ensure if the user exist.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while updating user with name : " + username
            });
        });
};