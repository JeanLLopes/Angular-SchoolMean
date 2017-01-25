(function () {
    angular.module('AppAngular', [])

        //CUSTOM FILTERS
        .filter('VerifiedEighteenAge', function () {
            return function (age) {
                if (age != null && !isNaN(age)) {
                    if (age >= 18) {
                        return "Entrada Liberada"
                    }
                    return "Entrada Proibida, Menor de 18 anos"
                }
                return "Idade Não Informada"
            }
        })

        .filter('VerifiedHours', function () {
            return function (hours) {
                if (hours != null) {
                    debugger;
                    switch (true) {
                        case (hours <= 12):
                            return "BOM DIA..."
                            break;
                        case (hours > 12 && hours < 18):
                            return "BOM TARDE..."
                            break;
                        case (hours > 18):
                            return "BOA NOITE..."
                            break;
                        default:
                            return "HORARIO NAO INFORMADO"
                            break;
                    }
                }
            }
        })
})();