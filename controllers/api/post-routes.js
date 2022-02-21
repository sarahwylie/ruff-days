const router = require('express').Router();
const { Post, User, Like } = require('../../models');
const withAuth = require('../../utils/auth');
// const sequelize = require('../../config/connection');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM dm WHERE post.id = dm.post_id)'), 'dm_count']
        ],
        include: [
            // {
            //     model: DM,
            //     attributes: ['id', 'dm_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM dm WHERE post.id = dm.post_id)'), 'dm_count']
        ],
        include: [
            // {
            //     model: DM,
            //     attributes: ['id', 'dm_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});
router.put('/like', withAuth, (req, res) => {
    if (req.session) {
        Post.like({ ...req.body, user_id: req.session.user_id }, { Like, User })
            .then(updatedLikeData => res.json(updatedLikeData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});


router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title
    },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id ' });
                return;
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id ' });
                return;
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;