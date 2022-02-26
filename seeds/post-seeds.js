const { Post } = require('../models');

const postdata = [
    {
        dogname: 'Mochi',
        breed: 'husky',
        user_id: 8
    },
    {
        dogname: 'Moo',
        breed: 'staffie',
        user_id: 4
    },
    {
        dogname: 'Chico',
        breed: 'chihuahua',
        user_id: 4
    },
    {
        dogname: 'Poppi',
        breed: 'mutt',
        user_id: 10
    },
    {
        dogname: 'Hank',
        breed: 'boston terrorist',
        user_id: 10
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;