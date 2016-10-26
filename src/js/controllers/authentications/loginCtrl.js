angular
  .module("seatSwap")
  .controller("loginCtrl", loginCtrl);

loginCtrl.$inject = ["User", "CurrentUserService"];
function loginCtrl(User, CurrentUserService) {
  const vm = this;
  vm.login = () => {
    console.log(vm.user);
    User
    .login(vm.user)
    .$promise
    .then(data => {
      const user = data.user ? data.user : null;
      if (user) {
        CurrentUserService.saveUser(user);
      }
    });
  };
}
