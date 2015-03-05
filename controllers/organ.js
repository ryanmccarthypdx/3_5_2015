OregonOrgans.OrganController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    delete: function() {
      if (confirm('Is this organ no longer good?')) {
        this.get('model').destroyRecord();
      }
    },
    saveOrgan: function() {
      var organ = this.get('model');
      organ.save();
      //
      // var controller = this;
      // organ.get('lot').then(function(lot) {
      //   lot.save();
      //   controller.transitionToRoute('lot', lot);
      //   //
      var lot = this.get('parentController.model');
      // debugger;
      lot.get('organs').pushObject(organ);
      lot.save();
    }
  }
});
