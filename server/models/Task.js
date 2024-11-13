const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Task = sequelize.define('Task', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: {
    type: DataTypes.ENUM,
    values: ['done', 'pending', 'in progress', 'completed'],
    defaultValue: 'pending',
  },
  userId: { type: DataTypes.UUID, references: { model: User, key: 'id' } }
});

module.exports = Task;
