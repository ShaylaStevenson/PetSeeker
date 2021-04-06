const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    Pet.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'name',
                'description',
                'date_posted'
            ],
            //============testing without=================
            // include: [{
            //         model: Comment,
            //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //         include: {
            //             model: User,
            //             attributes: ['username']
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ['username']
            //     }
            // ]
        })
        .then(petData => {
            const pets = petData.map(pet => pet.get({ plain: true }));
            res.render('profile', { pets, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new', (req, res) => {
    res.render('new-pet');
});

// ================ To add edit ability ================
// router.get('/edit/:id', withAuth, (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: ['id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: User,
//                     attributes: ['username']
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }

//             const post = dbPostData.get({ plain: true });
//             res.render('edit-post', { post, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// })




module.exports = router;