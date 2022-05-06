const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      },
      onDelete: "cascade"
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      },
      onDelete: "cascade"
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
