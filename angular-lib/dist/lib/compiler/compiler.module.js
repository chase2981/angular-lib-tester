"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var compiler_component_1 = require("./compiler.component");
var compiler_service_1 = require("./compiler.service");
var CompilerModule = (function () {
    function CompilerModule() {
    }
    CompilerModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    CompilerModule.ctorParameters = function () { return []; };
    return CompilerModule;
}());
exports.CompilerModule = CompilerModule;
function CompilerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CompilerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CompilerModule.ctorParameters;
}
//# sourceMappingURL=compiler.module.js.map