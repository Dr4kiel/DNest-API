const admin_conf = require("../../config/admin.config")
const db = require("../models/");
const Device = db.Device;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.device_id) {
        res.status(400).send({
            message: "I need a device id to record it."
        })
        return;
    }
    const device = {
        id: req.body.device_id
    }

    Device.create(device)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while creating the device."
            })
        });
};

exports.update = (req, res) => {
    // TODO
};

exports.delete = (req, res) => {
    if (!req.body.device_id) {
        res.status(400).send({
            message: "I need a device id to record it."
        })
        return;
    }
    Device.destroy({
        where: {
            id: req.body.device_id
        }
    })
        .then(num => {
            if (num == 1) {
                res.status(202).send({
                    message: `The device ${req.body.device_id} was successfully deleted.`
                })
            }
            else {
                res.status(404).send({
                    message: `The device ${req.body.device_id} not found.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while deleting the device."
            })
        });
};

exports.list = (req, res) => {

    Device.findAll({})
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while retrieving the devices."
            })
        });
};