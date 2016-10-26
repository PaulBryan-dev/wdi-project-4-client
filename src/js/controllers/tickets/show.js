angular
  .module("seatSwap")
  .controller("ticketsShowCtrl", ticketsShowCtrl);

ticketsShowCtrl.$inject = ["Ticket", "$stateParams", "$state"];
function ticketsShowCtrl(Ticket, $stateParams, $state) {
  const vm = this;

  vm.ticket = Ticket.get($stateParams);

  vm.delete = () => {
    Ticket
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("home");
      });
  };
}
