angular
.module('marvel')
.factory('characterFactory', ['Restangular', function (Restangular) {
  return Restangular.all("characters");
}])
.service('characterService', ['characterFactory', function(characterFactory) {
  return {
    getCharacter: function(url) {
      var id = url.replace('http://gateway.marvel.com/v1/public/characters/','')
      console.log(id);
      params = {
        ts:"123455634534",
        apikey:"bf97d77ed8bf4f60c9b052a56a344498",
        hash: "f133352ba044068455c013f96f206e86",
        id: id,
      }
      return characterFactory.customGET('',params);
    }
  }
}]);