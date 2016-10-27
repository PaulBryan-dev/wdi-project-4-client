angular
.module("seatSwap")
.controller("gamesIndexCtrl", gamesIndexCtrl);

gamesIndexCtrl.$inject = ["Game", "$stateParams", "$state"];
function gamesIndexCtrl(Game, $stateParams, $state) {
  const vm = this;

  vm.games = Game.query();
}
