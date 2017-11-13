import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',

  // isDisabled: Ember.computed('emailAddress', function(){
  //   return this.get('emailAddress') === '';
  // })

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



  //   actualEmailAddress: Ember.computed('emailAddress', function() { 
  //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  //   }),
  //
  //
  // emailAddressChanged: Ember.observer('emailAddress', function() { 
  //   console.log('observer is called', this.get('emailAddress')); 
  // })
});
