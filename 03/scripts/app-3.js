(function() {
    angular
        .module('AngularAppModule',[])
        .controller('ClienteController', ClienteController)
        .controller('ProdutoController', ProdutoController)

        function ClienteController(){
            //SETAMOS AQUI NOSSA VARIAVEL QU VAI PEGAR A VIEWMODEL
            //E PARA NÃO FICAR TRABALHANDO COM this A TODO MOMENTO
            //POIS SEUS VALORES SÃ MUTAVEIS
            //VAMOS DEFINIR UMA VARIAVEL PARA ISSO
            var vmcliente = this

            //AQUI AO INVES DE USAR $SCOPE USAMOS A NOSSA VIEWMODEL
            vmcliente.titulo = "Lista de Clientes"
            vmcliente.listaClientes = [
                {id: 2, name: "Cliente 1", email: "cliente@gmail.com"},
                {id: 1, name: "Cliente 2", email: "cliente@gmail.com"},
                {id: 3, name: "Cliente 3", email: "cliente@gmail.com"},
                {id: 4, name: "Cliente 4", email: "cliente@gmail.com"},
            ]
        }

        function ProdutoController(){
            var vmProduto = this
            vmProduto.titulo = "Lista de Produtos"
            vmProduto.listaProdutos = [
                {Name: "Produto 1", Valor: 10},
                {Name: "Produto 2", Valor: 20},
                {Name: "Produto 3", Valor: 30},
                {Name: "Produto 4", Valor: 40},
            ]
        }

        //AQUI NOS INJETAMOS O SCOPE
        //QUANDO USAMOS CONTROLLER AS "" NÃO PRECISAMO MAIS USAR O $SCOPE
        //AngularAppController["$inject"] = ["$scope"];
})();