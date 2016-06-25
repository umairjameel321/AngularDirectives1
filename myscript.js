/// <reference path="angular.min.js" />

// steps
// create a module
var theModule = angular.module("myModule", []);

// create a controller
var myController = function($scope)
{
    $scope.message = "My First Angular practice";

    var students = {name: "umair", rollno: "15-2332", id: "123"};

    // will access the students object with scope variable, so add the reference for it
    $scope.student = students;
};

// register this controller to a module
theModule.controller("myController", myController);

// we can also register function directly like this
// myModel.controller("myController", function($scope)
// {
//     $scope.message = "My Fist Angular practice";
// });

angular.module("testModule", []).controller("c_name", function($scope){
    $scope.message="Hello Guys";
})

