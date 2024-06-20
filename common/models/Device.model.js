module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("Device", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        signature: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true
        },
        owner: {
            type: Sequelize.UUID,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    return Device;
}