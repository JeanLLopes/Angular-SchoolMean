(function(){
    angular
        .module('AngularModule',['ngMessages'])
        .controller('AngularNgMessageController', AngularNgMessageController)

    function AngularNgMessageController(){
        var vmAngularNgMessage = this;

        //DATABASE
        vmAngularNgMessage.db = []

        vmAngularNgMessage.SubmitForm = function(dataUser){
            debugger;
            vmAngularNgMessage.db.push(dataUser)
        }
    }
})()