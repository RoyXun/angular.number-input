(function() {
     var app = angular.module("number-input-demo", ['number-input']);
    
     app.controller("AppController", function() {
          this.inputsConfig = [
               [
                    {
                         label: "Default",
                         options: {}
                    },
                    {
                         label: "Custom hint",
                         options: {
                              min: 0,
                              max: 24,
                              step: 0.25,
                              hint: "0 to 24 hours",
                              decimalPlaces: 2
                         }
                    }
               ],
               [
                    {
                         label: "Decimal places",
                         options: {
                              start: 0,
                              min: -1,
                              max: 1,
                              step: 0.0005,
                              hideHint: false,
                              disableDecimal: false
                         }
                    },
                    {
                         label: "From -10 to 10",
                         options: {
                              start: 0,
                              min: -10,
                              max: 10,
                              hideHint: true
                         }
                    }
               ],
               [
                    {
                         label: "50 or lower",
                         options: {
                              start: 45,
                              max: 50
                         }
                    },
                    {
                         label: "Always positive",
                         options: {
                              start: 0,
                              min: 0
                         }
                    }
               ]
          ];
     });
})();