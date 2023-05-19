const express = require("excpress");
const Recipe = require('../models/recipe')
const router = express.Router();

// ROUTES

// GET
router.get('/', async(req, res) => {
    try {
        res.json(await Recipe.find({})).status(200)
    } catch (error) {
        res.status(400).json(error)
    } 
});

// POST
router.post('/', async (req,res) => {
    try {
        res.json(await Recipe.create (req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

// PUT
router.put('/:id', async (req, res) => {
    try {
        res.json(await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE
router.delete ('/:id', async (req, res) => {
    try {
        res.json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;