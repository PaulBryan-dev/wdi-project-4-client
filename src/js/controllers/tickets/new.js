angular
.module("seatSwap")
.controller("ticketsNewCtrl", ticketsNewCtrl);

ticketsNewCtrl.$inject = ["Ticket", "$stateParams", "$state", "CurrentUserService"];
function ticketsNewCtrl(Ticket, $stateParams, $state, CurrentUserService) {
  const vm = this;

  vm.clubs = [
    "AFC Bournemouth",
    "Arsenal",
    "Burnley",
    "Chelsea",
    "Crystal Palace",
    "Everton",
    "Hull City",
    "Leicester City",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Middlesbrough",
    "Southampton",
    "Stoke City",
    "Sunderland",
    "Swansea City",
    "Tottenham Hotspur",
    "Watford",
    "West Bromwich Albion",
    "West Ham United"
  ];

  vm.submit = function(){
    Ticket
    .save({ ticket: vm.ticket })
    .$promise
    .then(data => {
      $state.go("usersShow", { id: CurrentUserService.getUser().id });
    });
  };
}
