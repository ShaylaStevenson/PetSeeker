const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

// base code from mini-project with additional columns
Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animal_type: {
        type: DataTypes.STRING,
        allowedNull: false,
    },
    breed: {
        type: DataTypes.STRING,
        allowedNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowedNull: false,
    },
    // datatype set as string instead of int so that default text can be added
    age: {
        type: DataTypes.STRING,
        allowedNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowedNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowedNull: false,
    },
    good_with_kids: {
        type: DataTypes.BOOLEAN,
        allowedNull: false,
    },
    good_with_cats: {
        type: DataTypes.BOOLEAN,
        allowedNull: false,
    },
    good_with_dogs: {
        type: DataTypes.BOOLEAN,
        allowedNull: false,
    },
    // maybe feature current zodiak sign pets on the homepage?
    zodiac: {
        type: DataTypes.STRING,
        allowedNull: true,
    },
    // what if we add a badge by thier picture in the details page if special needs is selected true, 
    // instead of listing it in pet details since it is not applicable for most pets.
    special_needs: {
        type: DataTypes.BOOLEAN,
        allowedNull
    },
    // added adoptable_now column
    // that way babies that are too young or pics of recently homed pets can still be posted for fun
    // can also be used as a filter option
    adoptable_now: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_posted: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    // since the user may want to specify a different email besides personal
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // not sure if this is being seeded correctly in petData.Json?
    comments: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;