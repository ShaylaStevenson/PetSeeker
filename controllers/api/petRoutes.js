const router = require('express').Router();
const { Pet, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Pet.findAll({
      attributes: [
          'name',
          'animal_type',
          'breed',
          'description',
          'age',
          'gender',
          'size',
          'good_with_kids',
          'good_with_cats',
          'good_with_dogs',
          'zodiac',
          'special_needs',
          'adoptable_now',
          'contact_email',
          'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          attributes: ['id', 'content', 'user_id', 'pet_id'],
                include: {
                    model: User,
                    attributes: ['name']
                }
        }
      ],
  })
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  });
});


router.get('/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
      attributes: [
          'name',
          'animal_type',
          'breed',
          'description',
          'age',
          'gender',
          'size',
          'good_with_kids',
          'good_with_cats',
          'good_with_dogs',
          'zodiac',
          'special_needs',
          'adoptable_now',
          'contact_email',
          'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          attributes: ['id', 'content', 'user_id', 'pet_id'],
                include: {
                    model: User,
                    attributes: ['name']
                }
        }
      ],
  })
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  });
});
//need to add in withAuth below, and user ID req.session, and if req.session
router.post('/profile', async (req, res) => {
  if (req) {
    Pet.create({
      name: req.body.name,
      animal_type: req.body.animal_type,
      breed: req.body.breed,
      description: req.body.description,
      age: req.body.age,
      gender: req.body.gender,
      size: req.body.size,
      good_with_kids: req.body.good_with_kids,
      good_with_cats: req.body.good_with_cats,
      good_with_dogs: req.body.good_with_dogs,
      zodiac: req.body.zodiac,
      special_needs: req.body.special_needs,
      adoptable_now: req.body.adoptable_now,
      date_posted: req.body.date_posted,
      contact_email: req.body.contact_email,
      //user_id: req.body.user_id
      user_id: req.session.user_id
    })
    .then(animalData => res.json(animalData))
    .catch(err => {
      res.status(400).json(err);
      console.error(err);
    });
  }
});

router.put('/:id', (req, res) => {
  Pet.update(req.body,
    {
      name: req.body.name,
      animal_type: req.body.animal_type,
      breed: req.body.breed,
      description: req.body.description,
      age: req.body.age,
      gender: req.body.gender,
      size: req.body.size,
      good_with_kids: req.body.good_with_kids,
      good_with_cats: req.body.good_with_cats,
      good_with_dogs: req.body.good_with_dogs,
      zodiac: req.body.zodiac,
      special_needs: req.body.special_needs,
      adoptable_now: req.body.adoptable_now,
      date_posted: req.body.date_posted,
      contact_email: req.body.contact_email,
      user_id: req.body.user_id
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(animalData => {
      if (!animalData[0]) {
        res.status(404).json({ message: "We can't find that pet!" });
        return;
      }
      res.json(animalData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
