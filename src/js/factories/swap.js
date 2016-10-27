angular
  .module("seatSwap")
  .factory("Swap", swapFactory);

swapFactory.$inject = ["API", "$resource"];
function swapFactory(API, $resource){
  return $resource(`${API}/swaps/:id`, {id: "@id"}, {
    "update":   { method: "PUT" }
  });
}
