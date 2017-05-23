import { Template } from 'meteor/templating';
 
import { Workouts } from '../api/workouts.js';
 
import './workout_item.html';

 
Template.workout_item.events({
  'click .delete'() {
    Workouts.remove(this._id);
  },
  'click .aWorkout'(event){
    event.preventDefault();
    // Stores the clicked area's ID as the currentWorkout.
    currentWorkout = this._id._str;
    console.log('------------------------------------');
    console.log(this._id._str);
    console.log('------------------------------------');
   Router.go('letsWorkout', {_id: this._id._str});
  }
});