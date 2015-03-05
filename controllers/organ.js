OregonOrgans.OrganController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Is this organ no longer good?')) {
        this.get('model').destroyRecord();
      }
    }
  }
})
