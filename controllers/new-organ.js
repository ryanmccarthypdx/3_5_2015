OregonOrgans.NewOrganController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var organ = this.get('model');
      organ.save();

      // var controller = this;
      // organ.get('lot').then(function(lot) {
      //   lot.save();
      //   controller.transitionToRoute('lot', lot);

      var lot = this.get('controllers.lot.model');
      lot.get('organs').pushObject(organ);
      lot.save();
    }
  }
});
