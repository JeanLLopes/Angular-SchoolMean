(function() {
    angular
        .module('AngularAppModule',[])
        .controller('ClienteController', ClienteController)

        function ClienteController(){
            //SETAMOS AQUI NOSSA VARIAVEL QU VAI PEGAR A VIEWMODEL
            //E PARA NÃO FICAR TRABALHANDO COM this A TODO MOMENTO
            //POIS SEUS VALORES SÃ MUTAVEIS
            //VAMOS DEFINIR UMA VARIAVEL PARA ISSO
            var vmcliente = this

            //AQUI AO INVES DE USAR $SCOPE USAMOS A NOSSA VIEWMODEL
            vmcliente.titulo = "Sistema de Cadastro Em Angular"
            vmcliente.listaClientes = [
                {Id: 2, Nome: "Jose 1", Email: "jose@gmail.com"},
                {Id: 1, Nome: "Maria 2", Email: "Maria@gmail.com"},
                {Id: 3, Nome: "Vitor 3", Email: "vitor@gmail.com"},
                {Id: 4, Nome: "Paulo 4", Email: "paulo@gmail.com"},
            ]

            vmcliente.AdicionarCliente = function(dadosCliente){
                debugger;
                dadosCliente.Id = vmcliente.listaClientes.length + 1; 
                vmcliente.listaClientes.push(angular.copy(dadosCliente));

                //LIMPA OS CAMPOS DE BUSCA DO NAVEGADOR
                ClearInputsFields();
            }

            vmcliente.RemoverCliente = function(id){
                vmcliente.listaClientes = vmcliente.listaClientes.filter(function(item){
                    return item.Id != id
                })
            }
        }


        function ClearInputsFields(){
            var inputsFields = document.querySelectorAll("input[type='text'], input[type='email']");
            inputsFields.forEach(function(inputsField) {
                 inputsField.value = '';
            }, this);
        }

        //AQUI NOS INJETAMOS O SCOPE
        //QUANDO USAMOS CONTROLLER AS "" NÃO PRECISAMO MAIS USAR O $SCOPE
        //AngularAppController["$inject"] = ["$scope"];
})();