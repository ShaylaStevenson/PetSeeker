const User = require('./User');
const Pet = require('./Pet');

// The user will be able to add many pets if desired
// especially helpful for shelters posting multiple pets daily
User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// A pet cannot be assigned to multiple Users. 
Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pet };