var app = angular.module('myApp', ['ngRoute']);

app.controller('phoneListCtr', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
});
app.controller('phoneDetailCtr', function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
    });
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'phoneListCtr'
        })
        .when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'phoneDetailCtr'
        })
        .otherwise({
            redirectTo: '/phones'
        });
}])
