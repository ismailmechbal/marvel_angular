function storyController(Story, $scope, characterService) {
  $scope.storyDetail = {};
  $scope.storyDetail["characters"] = {};
  $scope.storyDetail["story"] = Story;
  $scope.character = null;

  $scope.getCharacters = function () {
    angular.forEach($scope.storyDetail.story.data.results[0].characters.items, function(value, key) {
      $scope.getCharacter(value.resourceURI).then(function(response) {
        $scope.storyDetail['characters'][key] = response;
      }).catch(function(){
        console.log('Weird I cannot get the characters')
      });
    });
  };
  $scope.getCharacter = function (url) {
    return characterService.getCharacter(url)
  };
};
angular
.module('marvel')
.controller('storyController',storyController)