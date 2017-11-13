import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  messages: '',

//Check valid
isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
isLength: Ember.computed.gte('messages.length', 5),
isDisabled: Ember.computed.and('isValid', 'isLength'),
isConditionValid: Ember.computed.not('isDisable'),


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
