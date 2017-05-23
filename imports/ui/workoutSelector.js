import { Template } from 'meteor/templating';
 
import { Workouts } from '../api/workouts.js';
import '../imports/ui/workoutSelector.html';
import '../imports/ui/workout_item.html';

Template.workoutSelector.helpers({
  workoutList: function() {
    return Workouts.find({});
  },
});