(function(){

   var loginService = function(){


       var service = {};

       service.authenticate = function(email,password,callback){

           var response = {};

            if(email=="abc@gmail.com" && password=="abc"){
                response.result = true;
                response.message = "Login successful";
            }
           else{
                response.result = false;
                response.message = "Email Id or password incorrect";

            }

           callback(response);
       };


       return service;

   };


    var app = angular.module("mainModule");
    app.factory("loginService",loginService);



})();