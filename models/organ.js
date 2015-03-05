OregonOrgans.Organ = DS.Model.extend({
  price: DS.attr(),
  comment: DS.attr(),
  organImage: DS.attr(),
  name: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
