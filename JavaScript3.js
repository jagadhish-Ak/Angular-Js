// <reference path="scripts/angular.min.js" />
var sample = angular.module("sample", []).controller("countryController", function ($scope, $http, $location, $anchorScroll) {
    $http.get("CountryService.asmx/GetData")
        .then(function () {
            $scope.countries = response.data;
        });
    $scope.scrollTo = function (countryName) {
        $location.hash();
        $anchorScroll();
    }
});