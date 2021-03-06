// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('slowfood', ['ionic', 'slowfood.controllers', 'slowfood.services', 'ngResource', 'uiGmapgoogle-maps', 'ngCordova', 'ng-token-auth'])
    .constant('API_URL', 'https://slow-food-august.herokuapp.com/api/v1')
    // .constant('API_URL', 'https://sfa-sandbox.herokuapp.com/api/v1')

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDksFPPj-FomswnVnuVeNMdGBYb1nA4pas',
            v: '3.25', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.restaurants', {
                url: '/restaurants',
                views: {
                    'tab-restaurants': {
                        templateUrl: 'templates/tab-restaurants.html',
                        controller: 'getRestaurantsCtrl'
                    }
                }
            })
            .state('tab.login', {
                url: '/login',
                views: {
                    'tab-login': {
                        templateUrl: 'templates/tab-login.html',
                        controller: 'loginCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/restaurants');

    })
    .config(function ($authProvider, API_URL){
        $authProvider.configure({
            apiUrl: API_URL
        })
    });
