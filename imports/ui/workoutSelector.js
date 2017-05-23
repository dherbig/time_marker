import { Template } from 'meteor/templating';
 
import { Workouts } from '../api/workouts.js';
import '../imports/ui/workoutSelector.html';
import '../imports/ui/workout_item.html';

Template.workoutSelector.helpers({
  'workouts': function(){
    console.log('------------------------------------');
    console.log("INSIDE THE HELPER FILE!!!!");
    console.log('------------------------------------');
    return db.getCollection('workouts').find({});
  }
});