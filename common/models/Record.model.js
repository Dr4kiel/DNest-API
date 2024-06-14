module.exports = (sequelize, Sequelize) => {
    const Record = sequelize.define("Record", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        device_id: {
            type: Sequelize.STRING,
            references: {
                model: 'devices',
                key: 'id'
            }
        },
        timestamp: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        temperature: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        pressure: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    });

    return Record;
}