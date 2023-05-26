const express = require("express");
const Recipe = require('../models/recipe')
const router = express.Router();
const imgbbUploader = require("imgbb-uploader");
require("dotenv").config()

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
    const bbOptions = {
        apiKey: process.env.IMGBB_API_KEY, // MANDATORY apikey for imgBB
        base64string: req.body.image,
        // OPTIONAL: pass base64-encoded image (max 32Mb)
      };
      //post image to imgbb then add that url to the "image" key in your art object and post to MongoDB
  const imageResponse = await imgbbUploader(bbOptions);
  console.log(imageResponse.url);
  req.body.image = imageResponse.url
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
    const bbOptions = {
        apiKey: process.env.IMGBB_API_KEY, // MANDATORY apikey for imgBB
        base64string: req.body.image,
        // OPTIONAL: pass base64-encoded image (max 32Mb)
      };
      //post image to imgbb then add that url to the "image" key in your art object and post to MongoDB
  const imageResponse = await imgbbUploader(bbOptions);
  console.log(imageResponse.url);
  req.body.image = imageResponse.url
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