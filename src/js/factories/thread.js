angular
  .module("veeMail")
  .factory("Thread", Thread);

Thread.$inject = ["$resource", "API"];
function Thread($resource, API) {
  return $resource(`${API}/threads/:id`, { id: "@_id" }, {
    'save':    {
      method: "POST",
      headers: {
        'Content-Type': undefined
      }
    },
    'query':   { method: "GET", isArray: false },
    'update':  { method: "PUT" },
    'addVeme': {
      method: "POST",
      url: `${API}/threads/:id/addveme`,
      params: { id: "@_id" },
      headers: {
        'Content-Type': undefined
      }
    }
  });
}
