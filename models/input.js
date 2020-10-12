module.exports = function (sequelize, DataTypes) {
  var Input = sequelize.define("Input", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    optionalText: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
  });

  Input.associate = function (models) {
    Input.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });

    Input.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Input;
};
