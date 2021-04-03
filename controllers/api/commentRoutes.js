const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'content',
            'user_id',
            'pet_id'
        ],
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            content: req.body.content,
            pet_id: req.body.pet_id,
            user_id: req.session.user_id
        })
            .then(commentData => res.json(commentData))
            .catch(err => {
                res.status(400).json(err);
            });
    }
});

// PUT - update a comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(commentData => {
            if (!commentData[0]) {
                res.status(404).json({ message: "We couldn't find that comment!" });
                return;
            }
            res.json(commentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// DELETE a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: "We couldn't find that comment!" });
            return;
        }
        res.json(commentData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;