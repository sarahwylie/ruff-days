const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { DM } = require('../../models');

router.get('/', (req, res) => {
    DM.findAll()
      .then(dbDMData => res.json(dbDMData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
router.post('/', withAuth, (req, res) => {
    if (req.session) {
    DM.create({
        dm_text: req.body.dm_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbDMData => res.json(dbDMData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}});

router.delete('/:id', withAuth, (req, res) => {
    DM.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDMData => {
            if (!dbDMData) {
                res.status(404).json({ message: 'No DM found with this id ' });
                return;
            }
            res.json(dbDMData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;