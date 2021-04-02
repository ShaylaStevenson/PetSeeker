const { User } = require("../models")

const userData = [
  {
    "name": "Shayla",
    "email": "zooKeeper@aol.com",
    "password": "password12345",
    "shelter": true
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345",
    "shelter": false
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345",
    "shelter": true
  }
]   
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser