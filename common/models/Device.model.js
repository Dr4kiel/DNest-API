module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("Device", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
    });

    return Device;
}