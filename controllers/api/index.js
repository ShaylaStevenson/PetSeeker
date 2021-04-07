const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const commentRoutes = require('./commentRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/comments', commentRoutes);
router.use('/search', searchRoutes);


module.exports = router;