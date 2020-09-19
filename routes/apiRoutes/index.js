const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = (require('./zookeeperRoutes'));

router.use(animalRoutes, zookeeperRoutes);

module.exports = router;