function configuration(RestangularProvider, $stateProvider, $urlRouterProvider){
  RestangularProvider.setBaseUrl('http://gateway.marvel.com:80/v1/public/');
  $urlRouterProvider.otherwise('/marvel/story');
  $stateProvider
  .state('marvel_story', {
    url: "/marvel/story",
    resolve:{
      Story: function(storyService){
        return storyService.getStory();
      }
    },
    templateUrl: 'views/marvel/stories/show.html',
    controller:"storyController",
  })
};
angular.module('marvel')
.config(configuration)