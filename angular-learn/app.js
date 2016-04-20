var app = angular.module('myApp', ['ngRoute', 'phonecatFilters']);
app.controller('phoneListCtr', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
});
app.controller('phoneDetailCtr', function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
    $scope.sayHello=function(){
    	alert("hello");
    }
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
