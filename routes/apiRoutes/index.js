const router = require('express').Router();
let notes = require('../../db/db.json');
const fs = require('fs');
const { nanoid } = require('nanoid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = nanoid();
    console.log(req.body.id);
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        if (err) {
            res.send(404);
        }
        else {
            res.send('Success');
        }
    })
});

router.delete('/notes/:id', (req ,res) => {
    console.log(req.params.id);
    const filter = notes.filter((el) => {
        return el.id != req.params.id;
    })

    notes = filter;

    fs.writeFile('./db/db.json', JSON.stringify(notes), err => 
    {
        if (err) {
            res.send(404);
        }
        else {
            res.send('Success');
        }
    });
});

module.exports = router;