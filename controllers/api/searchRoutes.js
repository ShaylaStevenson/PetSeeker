const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
    try {
        // Get all projects and JOIN with user data
        const petData = Pet.findAll({
            include: [
            {
              model: Pet,
              attributes: [
                  'name',
                  'id',
                  'breed',
                  'animal_type' ],
            },
          ],
        })
        .then(dbSearchData => {
            console.log('searching...', dbSearchData);
            if (!dbSearchData) {
                res.status(404).json({ message: 'No pet found with this criteria' });
                return;
            }

            const pets = dbSearchData.map(pet => pet.get({ plain: true }));
            res.render('search', { pets });
        })
    } catch (err) {
        res.status(500).json(err);
        console.log('search did not work')
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Pet }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(userData)
    }
});

module.exports = router;