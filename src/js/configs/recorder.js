angular
  .module("veeMail")
  .config(recorder);

recorder.$inject = ["recorderServiceProvider"];
function recorder(recorderServiceProvider) {
  recorderServiceProvider.withMp3Conversion(true);
}
