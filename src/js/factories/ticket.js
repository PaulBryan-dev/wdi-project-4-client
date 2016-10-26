angular
  .module("seatSwap")
  .factory("Ticket", ticketFactory);

ticketFactory.$inject = ["API", "$resource"];
function ticketFactory(API, $resource){
  return $resource(`${API}/tickets/:id`, {id: "@id"}, {
    "query":    { method: "GET", isArray: true },
    "update":   { method: "PUT" }
  });
}
