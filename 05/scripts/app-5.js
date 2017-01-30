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
                {Id: 2, Nome: "Cliente 1", Email: "cliente@gmail.com"},
                {Id: 1, Nome: "Cliente 2", Email: "cliente@gmail.com"},
                {Id: 3, Nome: "Cliente 3", Email: "cliente@gmail.com"},
                {Id: 4, Nome: "Cliente 4", Email: "cliente@gmail.com"},
            ]

            vmcliente.AdicionarCliente = function(dadosCliente){
                debugger;
                dadosCliente.Id = vmcliente.listaClientes.length + 1; 
                vmcliente.listaClientes.push(dadosCliente)
            }
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