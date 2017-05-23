import { Template } from 'meteor/templating';
 
import './setup.html';

Template.setup.events({

    'click .back': function(e){
        e.preventDefault();
        history.back();
    },

    'click .play': function(e){
        e.preventDefault();
        Router.go('play');
    },
    'keypress #workoutName': (e => {
    //     e.preventDefault();
        console.log('Works!');
        $('.intervalConstructor').delay(500).slideDown();
        $(currentWorkout) === null ? null : currentWorkout = new Workout;
    }),
    'click #intervalAdd': (e => {
        const theInterval = {
            name,
            sets,
            seconds
        };
        console.log(theInterval);
        check(theInterval, IntervalSchema) ? Meteor.call('create', theInterval) : alert('Failed!');
        console.log(Workouts);
    }),
    
});

$('.ui.modal')
    .modal('show')
;


// 'click #intervalAdd': function(e) {
//     e.preventDefault();
//     var workoutName = $('#workoutName').val();
//     // Call. Meteor.call('MethodName', args..., callback);
//     Meteor.call('create', workoutName, function(err, res) {
//         if(err) {
//             console.log(err);
//         }

//     })
// }