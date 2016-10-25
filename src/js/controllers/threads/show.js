angular
  .module("veeMail")
  .controller("ThreadsShowCtrl", ThreadShowCtrl);

ThreadShowCtrl.$inject = ["API", "Thread", "$stateParams", "$state", "$window"];
function ThreadShowCtrl(API, Thread, $stateParams, $state, $window){
  const vm = this;

  Thread.get($stateParams, data => {
    vm.thread = data.thread;
  });

  vm.playAudio = function(veme){
    let audio = new Audio(veme.location);
    audio.play();
  };

  vm.threadsDelete = () => {
    Thread
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("threadsIndex");
      });
  };

  vm.finishedConverting = function(){
    $window.setTimeout(function(){

      var fd = new FormData();
      fd.append('message', vm.audio, Date.now().toString() +".mp3" );

      Thread
        .addVeme($stateParams, fd)
        .$promise
        .then(function(data) {
          vm.thread.vemes.push(data.veme);
        })
        .catch(function(err) {
          console.log(err, "ERROR");
        });
      }, 500);
  };
}
