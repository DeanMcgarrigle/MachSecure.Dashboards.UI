export default ngModule => {
    var controllerId = 'home';

    ngModule.controller(controllerId, function ($location, $scope, common) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = "Home";

        activate();

        function activate() {
            common.activateController([getEquip()], controllerId)
                .then(function () {
                    log('Home Page Activated');
                });
        }

    });
}
