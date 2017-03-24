import Ember from 'ember';

export default Ember.Route.extend({
    activate(){
    },
    actions: {
        gearMenuToggle(){
                this.controller.toggleProperty('showGearMenu');
        }
    }
});
