const { Post } = require('../models');

const postdata = [
    // {
    //     dogname: 'Today was Monday',
    //     breed: 'https://mondaysammirite.com',
    //     user_id: 8
    // },
    // {
    //     dogname: 'It is Tuesday',
    //     breed: 'https://buzzfeed.com/tuesdays',
    //     user_id: 4
    // },
    // {
    //     dogname: 'Wednesday is in the middle',
    //     breed: 'https://www.middle.com',
    //     user_id: 4
    // },
    // {
    //     dogname: 'Donec posuere metus vitae ipsum.',
    //     breed: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    //     user_id: 10
    // },
    // {
    //     dogname: 'Donec posuere metus vitae ipsum.',
    //     breed: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    //     user_id: 10
    // },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;