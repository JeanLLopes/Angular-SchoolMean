(function() {
    angular
        .module('AngularAppModule',[])
        .controller('AngularAppController', AngularAppController);

        function AngularAppController($scope){
            $scope.titulo = "Titulo da Pagina"
            $scope.listaClientes = [
                {name: "Cliente 1", email: "cliente@gmail.com"},
                {name: "Cliente 2", email: "cliente@gmail.com"},
                {name: "Cliente 3", email: "cliente@gmail.com"},
                {name: "Cliente 4", email: "cliente@gmail.com"},
            ]
        }

        //AQUI NOS INJETAMOS O SCOPE
        AngularAppController["$inject"] = ["$scope"];
})();