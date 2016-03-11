(function(global) {
    var coreModule = {};

    var MY_CONSTANT = 42

    var meaningOfLife = function() {
        return MY_CONSTANT;
    };
    coreModule.meaningOfLife = meaningOfLife;

    global.myRootNamespace = coreModule;
}(this));
