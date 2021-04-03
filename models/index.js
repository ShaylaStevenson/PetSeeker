const User = require('./User');
const Pet = require('./Pet');
const Comment = require('./Comment');

// The user will be able to add many pets if desired
// especially helpful for shelters posting multiple pets daily
User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

// A pet cannot be assigned to multiple Users. 
Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

Pet.hasMany(Comment, {
  foreignKey: 'pet_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Pet, {
  foreignKey: 'pet_id',
});


module.exports = { User, Pet, Comment };