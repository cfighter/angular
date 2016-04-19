var app = angular.module('myApp', []);

app.controller('phoneListCtr', function($scope, $http) {
    $http.get('phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
});
app.controller('phoneDetailCtr', function($scope, $routeParams) {
    $scope.phoneId=$routeParams.phoneId;
});
app.config(['$routerProvider'],function($routerProvider){
	$routerProvider
	.when('/phones',{
		template:'partials/phone-list.html',
		controller:'phoneListCtr'
	})
	.when('/phones/:phoneId',{
		template:'partials/phone-detail.html',
		controller:'phoneDetailCtr'
	})
	.oherwise({
		redirectTo:'/phones'
	});
})
