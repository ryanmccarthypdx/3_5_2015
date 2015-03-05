OregonOrgans.NewLotRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('lot');
  }
});
