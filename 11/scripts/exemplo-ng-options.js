(function () {
    angular
        .module('AngularOption', [])
        .controller('AngularOptionController', AngularOptionController)

    function AngularOptionController() {
        var VmAngularOption = this;

        VmAngularOption.listaClientes = [
            { Id: 2, Nome: "Jose 1", Email: "jose@gmail.com", Tipo: 'Cliente', Ativo: true},
            { Id: 1, Nome: "Maria 2", Email: "Maria@gmail.com" , Tipo: 'Cliente', Ativo: true},
            { Id: 3, Nome: "Vitor 3", Email: "vitor@gmail.com" , Tipo: 'Cliente', Ativo: false},
            { Id: 4, Nome: "Paulo 4", Email: "paulo@gmail.com" , Tipo: 'Vendedor', Ativo: true},
        ]

        //AQUI NOS SETAMOS UM VALOR INICIAL 
        VmAngularOption.lista_dados_com_valor_inicial = VmAngularOption.listaClientes[3].Email 

    }
})();