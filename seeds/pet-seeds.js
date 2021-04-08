const { Pet } = require('../models');

const petData = [
  {
    "name": "Kraken",
    "animal_type": "cat",
    "breed": "Domestic Short Hair",
    "description": "She rules the seas and takes no prisoners. If you are looking for a cat to keep you entertained and terrified, then look no further!",
    "age": "Mature",
    "gender": "Female",
    "size": "Small",
    "good_with_kids": false,
    "good_with_cats": false,
    "good_with_dogs": true,
    "zodiac": "Taurus",
    "special_needs": false,
    "adoptable_now": true,
    "contact_email": "pets4free@hotmail.com",
    "user_id": 1,
    "imageUrl": "http://res.cloudinary.com/petseekerpalooza/image/upload/v1617838668/kraken_p0mtey.jpg"
  },
  {
    "name": "Toast",
    "animal_type": "dog",
    "breed": "Labrador",
    "description": "Needing a new home with a nicer cat. Cats are my favorite. So are ducks. So are treats. You can be my favorite too!",
    "age": "Young",
    "gender": "Male",
    "size": "Medium",
    "good_with_kids": true,
    "good_with_cats": true,
    "good_with_dogs": false,
    "zodiac": "Cancer",
    "special_needs": false,
    "adoptable_now": true,
    "contact_email": "pets4free@hotmail.com",
    "user_id": 1,
    "imageUrl": "http://res.cloudinary.com/petseekerpalooza/image/upload/v1617839321/toast3_o7z2mr.jpg"
  }
]
const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;