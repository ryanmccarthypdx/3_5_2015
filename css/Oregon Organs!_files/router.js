OregonOrgans.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('lot', {path: ':lot_id'});
  this.resource('new-lot');

//delete later:  
  this.resource('triathlete');
  this.resource('dissident');
  this.resource('hitchhiker');
  this.resource('mid-age-woman');
  this.resource('winehouse');
})
