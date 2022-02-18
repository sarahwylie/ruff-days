const User = require('./User');
const Post = require('./Post');
const DM = require('./DM');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

DM.belongsTo(User, {
    foreignKey: 'user_id'
});

DM.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(DM, {
    foreignKey: 'user_id'
});

Post.hasMany(DM, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, DM };
