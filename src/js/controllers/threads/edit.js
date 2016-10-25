angular
  .module("veeMail")
  .controller("ThreadsEditCtrl", ThreadEditCtrl);

ThreadEditCtrl.$inject = ["Thread", "$stateParams", "$state"];
function ThreadEditCtrl(Thread, $stateParams, $state){
  const vm = this;

  Thread.get($stateParams, data => {
    vm.thread = data.thread;
  });

  vm.submit = () => {
    Thread
      .update($stateParams, { thread: vm.thread })
      .$promise
      .then(data => {
        $state.go("threadsShow", $stateParams);
      });
  };
}
