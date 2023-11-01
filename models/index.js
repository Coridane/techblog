const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// One-to-one relationships
Comment.belongsTo(Post, {foreignKey: 'postId'}); // Each comment will be tied to one post id
Post.belongsTo(User, {foreignKey: 'userId'}); // Each post will be tied to one user id
Comment.belongsTo(User, {foreignKey: 'userId'}); // Each comment will be tied to one user id

// One-to-many relationships
Post.hasMany(Comment); // A post may have many comments
User.hasMany(Post, {foreignKey: 'userId'}); // A user may have many posts
User.hasMany(Comment); // A user may have many comments

module.exports = {Post, User, Comment};