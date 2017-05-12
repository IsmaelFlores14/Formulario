angular.module("formularioApp", [])
        .controller("bodyController", function($scope, $http){
            $scope.posts = [];
            $scope.newPost = {};
            
            $scope.getPost = function(){
                $http.get("http://localhost:8080/agendaweb/webresources/contacto")
            .success(function(data){
                console.log(data);
                $scope.posts = data;
            })
            .error(function(error){
                console.log(error);
            });
            };
            
                $scope.addPost = function (){
                    $http.post("http://localhost:8080/agendaweb/webresources/contacto",{
                    nombre: $scope.newPost.nombre,
                    email: $scope.newPost.email,
                    telefono: $scope.newPost.telefono,
                    direccion: $scope.newPost.direccion,
                    propietario: $scope.newPost.propietario,
                    md5: $scope.md5
                })
                .success(function (data){
                    console.log(data);
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                    
                })
                .error(function (error, status, headers, config){
                    console.log(error);
                });
            };
});



