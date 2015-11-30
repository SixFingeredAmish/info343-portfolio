// Create app
var myApp = angular.module('myApp', ['ui.router']);

// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    // Configure states for "content" and "about"
    .state('content', {
        url:'/portfolio',
        templateUrl: 'templates/content.html',
        controller: 'ContentController'
    })

    .state('about', {
        url:'/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    });
});

// Landing page controller: define $scope.number as a number
myApp.controller("HomeController", function($scope) {
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){

})

// Content controller: define $scope.url as an image
.controller("ContentController", function($scope, $http) {
  $http.get('data/data.json').success(function(data) {
		$scope.data = data;
	});
})
