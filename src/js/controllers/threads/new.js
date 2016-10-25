angular
  .module("veeMail")
  .controller("ThreadsNewCtrl", ThreadNewCtrl);

ThreadNewCtrl.$inject = ["Thread", "$state", "$window"];
function ThreadNewCtrl(Thread, $state, $window){
  const vm  = this;

  vm.fd = new FormData();

  vm.finishedConverting = function(){
    $window.setTimeout(function(){
      vm.fd.append('message', vm.audio, Date.now().toString() +".mp3" );
    }, 500);
  };

  vm.submit = function(){
    console.log("Submitted")
    vm.fd.append('thread', JSON.stringify(vm.thread));

    Thread
      .save(vm.fd)
      .$promise
      .then(data => {
        console.log(data)
        $state.go("threadsIndex");
      })
      .catch(console.log);
  };
}
