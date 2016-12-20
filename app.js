var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {

host='http://localhost:8000'

$scope.ola ='fjjfjfjf'



 $scope.registra = function (data) {


 	console.log(data)

 		var todo={

 			'data': data
 		}

 	    $http({

        url: host+"/registra/",
        data: todo,
        method: 'POST'
 
        }).
        success(function(data) {

   
		});




 }








});