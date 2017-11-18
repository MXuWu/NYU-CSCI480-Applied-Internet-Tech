const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../db');
const Workout = mongoose.model('Workout');

router.get('', function(req, res) {
    Workout.find((err, workouts)=>{
        if (err){
            throw err;
        } else {
            res.render('workouts', {workouts: workouts});
        }
    });
});


router.post('/:slug/delete', function(req, res){
    const slug = req.params.slug;
    Workout.findOne({slug:slug}, (err, workout)=>{
        workout.remove();
        workout.save((err) => {
            res.redirect('/workouts');
        });
    });
});

router.post('', function(req, res) {
    const workout = new Workout({
        name: req.body.name,
        completionDate: req.body.completionDate.toString()
    });    
    workout.save((err) => {
        if (err){
            throw err;
        } else {
            res.redirect('/workouts');
        }
    })
});

module.exports = router;