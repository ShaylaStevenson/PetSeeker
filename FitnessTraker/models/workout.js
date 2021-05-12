const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: {type: Date,default: Date.now,},
  day: [{
  name: 
   { type: String,require: true,},
      type: {type: String,require: true,},
      duration: {type: Number,require: true,},
      distance: {type: Number,},
      weight: {type: Number,},
      reps: {type: Number,},
      set: {type: Number,},
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
