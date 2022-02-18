const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const DMRoutes = require('./DM-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/DM', DMRoutes);

module.exports = router;