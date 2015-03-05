OregonOrgans.NewOrganRoute = Ember.Route.extend({
  model: function(params) {
    var lot = this.modelFor('lot');
    var organ = this.store.createRecord('organ');
    lot.get('organs').then(function(organs) {
      organs.pushObject(organ);
    });
    return organ;
  }
});
