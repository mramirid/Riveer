// Service model
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Service', {
        service_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: true
        },
        ID_category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};