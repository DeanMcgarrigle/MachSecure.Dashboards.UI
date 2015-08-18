export default ngModule => {
    require("./routes")(ngModule);
    require("./nav")(ngModule);
};