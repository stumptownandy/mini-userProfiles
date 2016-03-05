app.controller("mainController",function($scope, dataService){

$scope.getUsers = function (){
$scope.users = dataService.getUsers();
};

$scope.getUsers();





});