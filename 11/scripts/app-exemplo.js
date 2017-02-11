(function () {
    angular
        .module('AppModule',['ngAnimate'])
        .controller('ControllerExemploAnimate', ControllerExemploAnimate)

    function ControllerExemploAnimate() {
         var vmExemploAnimate = this;

         vmExemploAnimate.titlePage = "Angular - Angular Animate"   
    }
})();

