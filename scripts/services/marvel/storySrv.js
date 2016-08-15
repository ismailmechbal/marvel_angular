angular
.module('marvel')
.factory('storyFactory', ['Restangular', function (Restangular) {
  return Restangular.all("stories");
}])
.service('storyService', ['storyFactory', function(storyFactory) {
  return {
    getStory: function() {
      params = {
        ts:"123455634534",
        apikey:"bf97d77ed8bf4f60c9b052a56a344498",
        hash: "f133352ba044068455c013f96f206e86",
        id: 48362,
      }
      return storyFactory.customGET('', params);
    }
  }
}]);