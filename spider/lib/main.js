// var app = angular.module('myApp', []);
var app = angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "view/home.html",
                controller: "spidercontrollor"
            }).state('EurekaServer', {
                url: "/EurekaServer",
                templateUrl: "view/EurekaServer.html",
                controller: "spidercontrollor"
            }).state('passport_server', {
                url: "/passport_server",
                templateUrl: "view/passport_server.html",
                controller: "spidercontrollor"
            })

    });
