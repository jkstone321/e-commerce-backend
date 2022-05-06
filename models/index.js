const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "cascade",
});

Product.belongsToMany(Tag, {
  through: {
    model: "ProductTag",
  },
  onDelete: "cascade",
});
Tag.belongsToMany(Product, {
  through: {
    model: "ProductTag",
  },
  onDelete: "cascade",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
