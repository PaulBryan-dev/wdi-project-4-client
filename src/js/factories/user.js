angular
  .module("SpursSwap")
  .factory("User", userFactory);

userFactory.$inject = ["API", "$resource"];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, {id: "@id"}, {
    "query":    { method: "GET", isArray: false },
    "update":   { method: "PUT" },
    "register": { method: "POST", url: `${API}/register` },
    "login":    { method: "POST", url: `${API}/login` }
  });
}
