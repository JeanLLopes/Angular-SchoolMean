(function() {
    angular
        .module('AngularAppModule',['ngAnimate'])
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


            //SETA UM VALOR PARA O EDITAR
            vmcliente.editando = false; 


            vmcliente.AdicionarCliente = function(dadosCliente){
                dadosCliente.Id = vmcliente.listaClientes.length + 1; 
                vmcliente.listaClientes.push(angular.copy(dadosCliente));

                //LIMPA OS CAMPOS DE BUSCA DO NAVEGADOR
                ClearInputsFields();
            }

            vmcliente.Remover = function(cliente){
                vmcliente.listaClientes = cliente.filter(function(item){
                    return !item.selecionado
                })
            }

            vmcliente.Editar = function(cliente, index){
                //DESTA MANEIRA FUNCIONA POREM ASSIM QUE VC ALTERAR NO INPUT selecionado
                //TAMBEM ALTERA NA TABELA, POIS ESTA USANDO O ELEMENTO EM SI QUE ESTA IMPRESSO NA TABELA
                //vmcliente.form = cliente

                //POR ISSO DEVEMOS USAR O ANGULAR.copy
                vmcliente.form = angular.copy(cliente);

                //DEVEMOS TAMBEM RECUPERAR O index, ASSIM PODEMOS RECUPERAR ESSE ITEM QUANDO NOS EDITAR O ELEMENTOS
                vmcliente.form.index = index;

                //SETA UM VALOR PARA O EDITAR
                vmcliente.editando = true; 
            }


            vmcliente.Salvar = function(cliente){
                //o comando MAP vai varrer seu elemento como um foreach
                var clientesCadastrados = vmcliente.listaClientes.map(function(item, itemIndex){
                    if(itemIndex === cliente.index){
                        delete cliente.index
                        return cliente;
                    }
                    return item;
                });

                vmcliente.listaClientes = clientesCadastrados;

                //LIMPA OS CAMPOS DA TELA
                ClearInputsFields()

                //PARA ESTE METODO NAO APRESENTAR PROBLEMA DEVEMOS REMOVER O ordeby DA TABLE

                //DEVEMOS LIMPAR PARA NÃO DAR ERRO NO 
                vmcliente.form ={};

                //SETA UM VALOR PARA O EDITAR
                vmcliente.editando = false; 
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