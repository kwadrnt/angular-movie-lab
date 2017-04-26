angular
  .module('tunely', [])
  .controller('PageController', PageController);

function PageController () {
  var vm = this;

  vm.newPerson = {
      name: 'Cory',
      occupation: 'WDI instructor'
  };
}
