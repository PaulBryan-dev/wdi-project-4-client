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
      controller: "usersShowCtrl as usersShow"
    })
    .state("usersEdit", {
      url: "/users/:id/edit",
      templateUrl: "/js/views/users/edit.html",
      controller: "usersEditCtrl as usersEdit"
    })
    .state("ticketsIndex", {
      url: "/tickets",
      templateUrl: "/js/views/tickets/index.html",
      controller: "ticketsIndexCtrl as index"
    })

    // .state("usersIndex", {
    //   url: "/users",
    //   templateUrl: "/js/views/users/index.html",
    //   controller: "usersIndexCtrl as usersIndex",
    // })
  	// 	.state('threadsIndex', {
  	// 		url: "/threads",
  	// 		templateUrl: "/js/views/threads/index.html",
    //     controller: "ThreadsIndexCtrl as threads"
  	// 	})
    //   // MUST be above show
    //   .state('threadsNew', {
    //     url: "/threads/new",
    //     templateUrl: "/js/views/threads/new.html",
    //     controller: "ThreadsNewCtrl as threads"
    //   })
    //   .state('threadsShow', {
  	// 		url: "/threads/:id",
  	// 		templateUrl: "/js/views/threads/show.html",
    //     controller: "ThreadsShowCtrl as threads"
  	// 	})
    //   .state('threadsEdit', {
  	// 		url: "/threads/:id/edit",
  	// 		templateUrl: "/js/views/threads/edit.html",
    //     controller: "ThreadsEditCtrl as threads"
  	// 	})

    ;

    $urlRouterProvider.otherwise("/");
}
