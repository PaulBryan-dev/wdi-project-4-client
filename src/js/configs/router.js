angular
  .module("veeMail")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

function Router($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/js/views/home.html",
    })
    .state("register", {
      url: "/register",
      templateUrl: "/js/views/register.html",
      controller: "registerCtrl as register",
    })
    .state("login", {
      url: "/login",
      templateUrl: "/js/views/login.html",
      controller: "loginCtrl as login"
    })
    .state("usersIndex", {
      url: "/users",
      templateUrl: "/js/views/users/index.html",
      controller: "usersIndexCtrl as usersIndex",
    })
  		.state('threadsIndex', {
  			url: "/threads",
  			templateUrl: "/js/views/threads/index.html",
        controller: "ThreadsIndexCtrl as threads"
  		})
      // MUST be above show
      .state('threadsNew', {
        url: "/threads/new",
        templateUrl: "/js/views/threads/new.html",
        controller: "ThreadsNewCtrl as threads"
      })
      .state('threadsShow', {
  			url: "/threads/:id",
  			templateUrl: "/js/views/threads/show.html",
        controller: "ThreadsShowCtrl as threads"
  		})
      .state('threadsEdit', {
  			url: "/threads/:id/edit",
  			templateUrl: "/js/views/threads/edit.html",
        controller: "ThreadsEditCtrl as threads"
  		})

    ;

    $urlRouterProvider.otherwise("/");
}
