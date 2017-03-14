/**
 * Created by asriv10 on 1/22/17.
 */

(function(){


    var app = angular.module("mainModule");

    var loginController = function($scope,$http,loginService){

       $scope.response = {};

        $scope.login = function(){


               console.log("Inside controller login function");

               console.log("email id: "+ $scope.email);
               console.log("password: "+ $scope.password);


               loginService.authenticate($scope.email,$scope.password, function(response){


                   $scope.response = response;


               });

        };
    };


    app.controller("loginController",loginController);

})();
