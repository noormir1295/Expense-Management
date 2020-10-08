module.exports = function (sequelize, Datatypes) {
  var Input = sequelize.define("Input", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },

    amount: {
      type: Datatypes.DECIMEL(10, 2),
      allowNull: false,
    },

    date: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },

    optionalText: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  Input.associate = function (models) {
    Input.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Input;
};
