var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {

host='http://45.55.131.59:8000'

$scope.ola ='fjjfjfjf'

$scope.items = [{
  id: 1,
  label: 'Surco',
}, {
  id: 2,
  label: 'Los Olivos',
},
{
  id: 3,
  label: 'San Isidro',
},
{
  id: 3,
  label: 'San Borja',
},
{
  id: 4,
  label: 'Callao',
},
{
  id: 5,
  label: 'San Miguel',
}


];


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

  $scope.cuidador = function (data) {


 	console.log(data)

 		var todo={

 			'data': data
 		}

 	    $http({

        url: host+"/cuidador/",
        data: todo,
        method: 'POST'
 
        }).
        success(function(data) {

        	 swal({   title:'Cuidador',text:'Felicitaciones ya eres un cuidador',   type: "success",  timer: 2000,   showConfirmButton: false });
   

   
		});




 }


    $http.get(host+'/cuidador/').success(function(data) {

    $scope.cuidadores = data



    })







});