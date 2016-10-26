angular
.module("seatSwap")
.controller("ticketsEditCtrl", ticketsEditCtrl);

ticketsEditCtrl.$inject = ["Ticket", "$stateParams", "$state"];
function ticketsEditCtrl(Ticket, $stateParams, $state) {
  const vm = this;

  vm.ticket = Ticket.get($stateParams);

  vm.submit = () => {
    console.log("submit edit");
    Ticket
    .update($stateParams, { ticket: vm.ticket })
    .$promise
    .then(data => {
      $state.go("ticketsShow", $stateParams);
    });
  };
}
