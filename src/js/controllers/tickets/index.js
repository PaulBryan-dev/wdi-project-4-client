angular
.module("seatSwap")
.controller("ticketsIndexCtrl", ticketsIndexCtrl);

ticketsIndexCtrl.$inject = ["Ticket", "$stateParams", "$state"];
function ticketsIndexCtrl(Ticket, $stateParams, $state) {
  const vm = this;

  vm.tickets = Ticket.query();
}
