angular
.module("seatSwap")
.controller("usersEditCtrl", usersEditCtrl);

usersEditCtrl.$inject = ["User", "$stateParams", "$state"];
function usersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  vm.submit = () => {
    console.log("submit edit");
    User
    .update($stateParams, { user: vm.user })
    .$promise
    .then(data => {
      $state.go("usersShow", $stateParams);
    });
  };
}
