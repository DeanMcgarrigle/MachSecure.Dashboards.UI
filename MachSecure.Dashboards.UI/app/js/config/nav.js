export default ngModule => {

    var routes = [];

    routes.push({
        name: "home",
        config: {url: "/", template: require("../../html/views/home.html"), icon: "th-large"}
    });

    ngModule.constant("routes", routes);
};