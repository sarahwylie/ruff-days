const User = require('./User');
const Post = require('./Post');
// const DM = require('./DM');
const Like = require('./Like');
// const Photo = require('./Photo');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
  
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Like.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Like.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  User.hasMany(Like, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Like, {
    foreignKey: 'post_id'
  });

  // Photo.belongsTo(Post, {
  //   foreignKey: 'post_id',
  //   onDelete: 'CASCADE'
  // })
  
//   DM.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
  
//   DM.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
//   });
  
//   User.hasMany(DM, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
  
//   Post.hasMany(DM, {
//     foreignKey: 'post_id'
//   });

module.exports = { User, Post, Like };
