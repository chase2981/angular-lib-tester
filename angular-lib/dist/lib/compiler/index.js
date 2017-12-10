(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./compiler.module", "./compiler.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_module_1 = require("./compiler.module");
    exports.CompilerModule = compiler_module_1.CompilerModule;
    var compiler_component_1 = require("./compiler.component");
    exports.CompilerComponent = compiler_component_1.CompilerComponent;
});
