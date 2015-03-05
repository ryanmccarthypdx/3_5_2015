OregonOrgans.Lot = DS.Model.extend({
  tagline: DS.attr(),
  description: DS.attr(),
  liveImage: DS.attr(),
  organs: DS.hasMany('organ', {async: true})
});
