angular
  .module("SpursSwap")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state"];
function usersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  vm.delete = () => {
    User
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("home");
      });
  };
}
