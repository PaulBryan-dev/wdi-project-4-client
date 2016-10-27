angular
  .module("seatSwap")
  .factory("Game", GameFactory);

GameFactory.$inject = ["API", "$resource"];
function GameFactory(API, $resource){
  return $resource(`${API}/games/:id`, {id: "@id"}, {
    "update":   { method: "PUT" }
  });
}
