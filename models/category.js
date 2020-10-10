module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
  });

  Category.associate = function(models) {
    Category.hasMany(models.Input, {
      foreignKey: {
        allowNull: false,
      }
    });
  };

  return Category;
};