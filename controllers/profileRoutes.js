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
                'date_posted',
                'imageId',
                'imageUrl'
            ],
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


module.exports = router;