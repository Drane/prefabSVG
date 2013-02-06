'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: TemplateCtrl});
    $routeProvider.when('/json', {templateUrl: 'partials/json.html', controller: TempCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
