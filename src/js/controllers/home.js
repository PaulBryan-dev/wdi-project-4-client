angular
 .module('seatSwap')
 .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ["User", "$stateParams"];
function homeCtrl(User, $stateParams) {
   const vm = this;
  //  User.get($stateParams, data => {
  //    vm.user = data.user;
  //  });
}
