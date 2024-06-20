const db = require("../models/");
const Record = db.Record;
const Device = db.Device;
const Op = db.Sequelize.Op;

exports.register = async (req, res) => {
    const record = {
        device_id: req.body.device_id,
        timestamp: req.body.timestamp,
        temperature: req.body.temperature,
        pressure: req.body.pressure
    }

    if (!record.device_id || !record.timestamp || !record.temperature || !record.pressure) {
        res.status(400).send({
            message: "Informations missing !"
        });
        return;
    }

    // check if device exist
    let device = await Device.findOne({ where: { signature: record.device_id } })
    if (device === null) {
        res.status(404).send({
            message: "Your device are not registered."
        });
        return;
    }

    Record.create(record)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while registering a new record."
            });
        });

}

exports.records = async (req, res) => {
    if (!req.params.device_id) {
        res.status(400).send({
            message: "I need a device id find records."
        })
        return;
    }

    // check if device exist
    if (Device.findByPk(req.params.device_id) === null) {
        res.status(404).send({
            message: "Device not registered."
        });
        return;
    }

    const device = await Device.findByPk(req.params.device_id);
    console.log(device);

    Record.findAll({
        where: {
            device_id: device.signature
        },
        attributes: ['timestamp', 'temperature', 'pressure', 'createdAt']
    })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while retrieving records."
            });
        });
};