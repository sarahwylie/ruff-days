// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class DM extends Model {};

// DM.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         dm_text: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             }
//         }
//     },
//     {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'dm'
//     }
// );

// module.exports = DM;