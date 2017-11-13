import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',

//Check valid
isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

//Check whether a property is empty or not
 isDisabled: Ember.computed.empty('emailAddress'),
 isDisabled: Ember.computed.empty('messages'),

//Set click action
actions:{

  sendMessages(){
    alert(`Saving Email address in progess: ${this.get('emailAddress')} and messages: ${this.get('messages')}`);
    this.set('responseMessage',`We got your message and we’ll get in touch soon`);
    this.set('emailAddress','');
    this.set('messages','');
  }
}
});
