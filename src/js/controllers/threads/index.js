angular
  .module("veeMail")
  .controller("ThreadsIndexCtrl", ThreadIndexCtrl);

ThreadIndexCtrl.$inject = ["Thread"];
function ThreadIndexCtrl(Thread){
  const vm = this;

  Thread
    .query()
    .$promise
    .then(data => {
      vm.threads = data.threads;
    });
}
