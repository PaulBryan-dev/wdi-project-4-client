angular
  .module("seatSwap")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state", "Swap"];
function usersShowCtrl(User, $stateParams, $state, Swap) {
  const vm = this;

  getUser();

  vm.delete = () => {
    User
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("home");
      });
  };

  function getUser(){
    User
      .get($stateParams)
      .$promise
      .then(data => {
        vm.user = data;
        runFilters();
      });
  }

  function runFilters(){
    filterPending();
    filterAccepted();
  }

  function filterPending(){
    vm.user.pending_swaps = vm.user.received_swaps.filter(swap => {
      return swap.status === "pending";
    });
  }

  function filterAccepted(){
    vm.user.accepted_swaps = vm.user.received_swaps.filter(swap => {
      return swap.status === "accepted";
    });
  }

  vm.accept = (swap) => {
    Swap
      .update({ id: swap.id }, {
        swap: {
          status: "accepted"
        }
      })
      .$promise
      .then(data => {
        getUser();
      });
  };

  vm.reject = (swap) => {
    Swap
      .update({ id: swap.id }, {
        swap: {
          status: "rejected"
        }
      })
      .$promise
      .then(data => {
        getUser();
      });
  };
}
