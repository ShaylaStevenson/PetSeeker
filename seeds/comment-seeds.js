const { Comment } = require('../models');

const commentData = [
    {
        "content": "Wow, what a cute pet!",
        "user_id": 2,
        "pet_id": 1
    },
    {
        "content": "Love the ears :)",
        "user_id": 1,
        "pet_id": 1
    },
    {
        "content": "What a sweetie",
        "user_id": 1,
        "pet_id": 2
    }
];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;