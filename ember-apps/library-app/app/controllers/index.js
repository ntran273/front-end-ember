import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

//Check valid
isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

//Check whether a property is empty or not
 isDisabled: Ember.computed.empty('emailAddress'),


//Set click action
actions:{

  saveInvitation(){
    alert(`Saving of the following email address in progess: ${this.get('emailAddress')}`);
    this.set('responseMessage',`Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    this.set('emailAddress','');
  }
}

});
