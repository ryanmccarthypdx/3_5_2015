OregonOrgans.organsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('organ');
  }
});
