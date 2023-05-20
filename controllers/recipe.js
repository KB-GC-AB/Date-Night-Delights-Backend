const express = require("express");
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

// GET
router.get('/:id', async(req, res) => {
    console.log("Grabbing recipe with id of :", req.params.id)
    try {
        res.json(await Recipe.findById(req.params.id)).status(200)
    } catch (error) {
        res.status(400).json(error)
    } 
});

// POST
router.post('/', async (req,res) => {
    console.log("reached creating recipes POST route")
    console.log(req.body)
    try {
        res.json(await Recipe.create (req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

// PUT
router.put('/:id', async (req, res) => {
    console.log("reached creating recipes POST route")
    console.log(req.body)
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