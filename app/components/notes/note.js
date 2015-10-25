module.exports = ["$resource", function($resource){
  return $resource("http://private-9aad-note10.apiary-mock.com/notes/:id", {id:'@id'}, {'update': { method:'PUT'}});
}]