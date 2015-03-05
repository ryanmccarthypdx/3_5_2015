OregonOrgans.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('lot', {path: ':lot_id'});
  this.resource('new-lot', function() {
    this.resource('new-organ');
  });
//delete later:
  this.resource('triathlete');

})
