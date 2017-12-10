var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "@angular/http", "./compiler.component", "./compiler.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var http_1 = require("@angular/http");
    var compiler_component_1 = require("./compiler.component");
    var compiler_service_1 = require("./compiler.service");
    var CompilerModule = (function () {
        function CompilerModule() {
        }
        CompilerModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    http_1.HttpModule,
                ],
                declarations: [
                    compiler_component_1.CompilerComponent,
                ],
                exports: [
                    compiler_component_1.CompilerComponent,
                    http_1.HttpModule,
                ],
                providers: [
                    compiler_service_1.CompilerService
                ]
            })
        ], CompilerModule);
        return CompilerModule;
    }());
    exports.CompilerModule = CompilerModule;
});
