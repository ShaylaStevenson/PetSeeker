const { Pet } = require('../models');

const petData = [
  {
    "name": "Kraken",
    "animal_type": "cat",
    "breed": "Domestic Short Hair",
    "description": "Destroyer of planets. And a great mouser.",
    "age": "4 years",
    "gender": "female",
    "size": "small < 15 lbs",
    "good_with_kids": false,
    "good_with_cats": false,
    "good_with_dogs": true,
    "zodiac": "Taurus",
    "special_needs": false,
    "adoptable_now": true,
    "contact_email": "pets4free@hotmail.com",
    "user_id": 1,
    "comments": "Beautifully menacing."
  },
  {
    "name": "Toast",
    "animal_type": "dog",
    "breed": "Labrador mix",
    "description": "Needing a new home with a nicer cat",
    "age": "8 months",
    "gender": "female",
    "size": "large 50 - 70 lbs",
    "good_with_kids": true,
    "good_with_cats": true,
    "good_with_dogs": false,
    "zodiac": "Cancer",
    "special_needs": false,
    "adoptable_now": true,
    "contact_email": "pets4free@hotmail.com",
    "user_id": 1,
    "comments": "Why so serious?"
  }
]
const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;