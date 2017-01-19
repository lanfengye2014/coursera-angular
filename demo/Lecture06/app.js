(function() {
    angular.module('firstApp', [])
        .controller('indexController', function($scope) {
            $scope.name = '';
            $scope.totalValue = 0;
            $scope.displayNumeric = function() {
                var totalValue = 0;
                totalValue = calculatNumericForString($scope.name);
                $scope.totalValue = totalValue;
            };

            function calculatNumericForString(string) {
                var totalStringValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }
                return totalStringValue;
            };


        })

})();
