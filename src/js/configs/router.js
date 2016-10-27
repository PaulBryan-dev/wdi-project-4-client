angular
  .module("seatSwap")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

function Router($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/js/views/homepage.html",
    })
    .state("register", {
      url: "/register",
      templateUrl: "/js/views/authentications/register.html",
      controller: "registerCtrl as register",
    })
    .state("login", {
      url: "/login",
      templateUrl: "/js/views/authentications/login.html",
      controller: "loginCtrl as login"
    })
    .state("usersShow", {
      url: "/users/:id",
      templateUrl: "/js/views/users/show.html",
      controller: "usersShowCtrl as show"
    })
    .state("usersEdit", {
      url: "/users/:id/edit",
      templateUrl: "/js/views/users/edit.html",
      controller: "usersEditCtrl as edit"
    })
    .state("ticketsIndex", {
      url: "/tickets",
      templateUrl: "/js/views/tickets/index.html",
      controller: "ticketsIndexCtrl as index"
    })
    .state("ticketsNew", {
      url: "/tickets/new",
      templateUrl: "/js/views/tickets/new.html",
      controller: "ticketsNewCtrl as new"
    })
    .state("ticketsEdit", {
      url: "/tickets/:id/edit",
      templateUrl: "/js/views/tickets/edit.html",
      controller: "ticketsEditCtrl as edit"
    })
    .state("gamesIndex", {
      url: "/games",
      templateUrl: "/js/views/games/index.html",
      controller: "gamesIndexCtrl as index"
    })
    .state("swapsNew", {
      url: "/games/:id/swaps/new",
      templateUrl: "/js/views/swaps/new.html",
      controller: "swapsNewCtrl as new"
    });

    $urlRouterProvider.otherwise("/");
}
