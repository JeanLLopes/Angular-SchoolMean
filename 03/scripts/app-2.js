(function() {
    angular
        .module('AngularAppModule',[])
        .controller('AngularAppController', AngularAppController)
        .controller('AngularAppController2', AngularAppController2)

        function AngularAppController($scope){
            $scope.titulo = "Lista de Clientes"
            $scope.listaClientes = [
                {name: "Cliente 1", email: "cliente@gmail.com"},
                {name: "Cliente 2", email: "cliente@gmail.com"},
                {name: "Cliente 3", email: "cliente@gmail.com"},
                {name: "Cliente 4", email: "cliente@gmail.com"},
            ]
        }

        function AngularAppController2($scope){
            $scope.titulo = "Lista de Produtos"
            $scope.listaProdutos = [
                {Name: "Produto 1", Valor: 10},
                {Name: "Produto 2", Valor: 20},
                {Name: "Produto 3", Valor: 30},
                {Name: "Produto 4", Valor: 40},
            ]
        }

        //AQUI NOS INJETAMOS O SCOPE
        AngularAppController["$inject"] = ["$scope"];
})();