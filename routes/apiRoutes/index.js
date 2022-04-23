const router = require('express').Router();
const notes = require('../../db/db.json');
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
    // how to find an item in an array by id
    // how to remove item in an array
    
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        if (err) {
            res.send(404);
        }
        else {
            res.send('Success');
        }
});

module.exports = router;