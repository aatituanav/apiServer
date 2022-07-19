const { Router } = require('express');
const router = Router();

const users = require('../../database/users.json');

router.get('/users', (req, res) => {
    res.json(users);
})

router.get('/user', (req, res) => {
    const pos = req.query.position
    const resp = Object.values(users).filter((key) => {
        return key.position == pos
    })
    res.json(resp);
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id

    if (users[id] == undefined) {
        return res.status(404).send('Not found');
    } else {
        res.json(users[id]);
    }
})

module.exports = router;