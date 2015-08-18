require("angular");
require("angular-ui-router");
require("angular-bootstrap");
require("angular-local-storage");
require("angular-loading-bar");

const ngModule = angular.module("app",
    ["ui.router", "ui.bootstrap", "LocalStorageModule", "cfp.loadingBarInterceptor","cfp.loadingBar"]);

require("./common")(ngModule);
require("./config")(ngModule);
require("./controllers")(ngModule);
require("./directives")(ngModule);
require("./services")(ngModule);
