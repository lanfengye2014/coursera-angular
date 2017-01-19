(function() {
    angular.module('firstApp', [])
        .controller('indexController', function($scope) {
            $scope.name = 'firstApp';
            $scope.sayHello = function() {
                return 'sayHello';
            };
        })

})();
