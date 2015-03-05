OregonOrgans.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
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
    }
  }
});
