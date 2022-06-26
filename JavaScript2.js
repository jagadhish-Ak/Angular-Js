
//// <reference path="scripts/angular.min.js" />

var demo = angular.module("demo", []).controller("demoController", function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrolllocation) {
        $location.hash(scrolllocation);
        $anchorScroll()
        $scope.message = "Angular"
    }



});