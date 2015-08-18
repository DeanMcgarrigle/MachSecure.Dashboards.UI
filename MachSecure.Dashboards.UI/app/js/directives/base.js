export default ngModule => {

    ngModule.directive('base', function () {

        return {
            restrict: 'E',
            template: require("../../html/directives/base.html"),
            scope: {
                isOpen: "@"
            },
            controllerAs: "vm",
            controller: function ($scope) {
                var vm = this;
                vm.currentState = '';
                $scope.$on('$stateChangeSuccess',
                    function (event, toState) {
                        vm.currentState = toState.name;
                    });
            }
        };
    });
}
