angular
.module("seatSwap")
.controller("swapsNewCtrl", swapsNewCtrl);

swapsNewCtrl.$inject = ["Game", "Swap", "$stateParams", "$state", "CurrentUserService"];
function swapsNewCtrl(Game, Swap, $stateParams, $state, CurrentUserService) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  Game
    .get($stateParams)
    .$promise
    .then(data => {
      vm.game = data;
      vm.swap = {
        game_id: data.id
      };
    });

  vm.submit = function(){
    Swap
    .save({ swap: vm.swap })
    .$promise
    .then(data => {
      $state.go("gamesIndex");
    });
  };
}
