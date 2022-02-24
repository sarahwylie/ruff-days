const { Post } = require('../models');

const postdata = [
    {
        username: 'Today was Monday',
        breed: 'https://mondaysammirite.com',
        user_id: 8
    },
    {
        username: 'It is Tuesday',
        breed: 'https://buzzfeed.com/tuesdays',
        user_id: 4
    },
    {
        username: 'Wednesday is in the middle',
        breed: 'https://www.middle.com',
        user_id: 4
    },
    {
        username: 'Donec posuere metus vitae ipsum.',
        breed: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 10
    },
    {
        username: 'Donec posuere metus vitae ipsum.',
        breed: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 10
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;