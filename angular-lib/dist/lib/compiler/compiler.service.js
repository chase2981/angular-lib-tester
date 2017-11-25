"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CompilerService = (function () {
    function CompilerService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    CompilerService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.http.get;
    };
    CompilerService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CompilerService.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return CompilerService;
}());
exports.CompilerService = CompilerService;
function CompilerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CompilerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CompilerService.ctorParameters;
    /** @type {?} */
    CompilerService.prototype.http;
}
//# sourceMappingURL=compiler.service.js.map