angular
  .module("seatswap", [
    "ui.router",
    "ngResource",
    "angular-jwt",
    "angularMoment",
    "angularAudioRecorder"
  ]).config(locationProvider);

function locationProvider($locationProvider) {
  $locationProvider.html5Mode(true);
}
