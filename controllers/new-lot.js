OregonOrgans.NewLotController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // console.log('saved!')
      var newLot = this.store.createRecord('lot', {
        tagline: this.get('tagline'),
        description: this.get('description'),
        liveImage: this.get('liveImage')
      });
      newLot.save();
      this.set('tagline',null);
      this.set('description',null);
      this.set('liveImage',null);
      this.transitionToRoute('home');
    },

    addOrganForm: function() {
      // console.log('fired!!');
      var newOrgan = this.store.createRecord('organ');
      this.get('model.organs').then(function(organs) {
        organs.addObject(newOrgan)
      });
    }
  }
});
