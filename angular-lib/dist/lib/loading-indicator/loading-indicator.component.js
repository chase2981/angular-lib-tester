"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
        this.height = 75;
        this.width = 75;
    }
    /**
     * @return {?}
     */
    LoadingIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //console.log('**** loading-indicator init() ****');
    };
    /**
     * @return {?}
     */
    LoadingIndicatorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //console.log('**** loading-indicator destroy() ****');
    };
    LoadingIndicatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rd-loading-indicator',
                    template: "\n    <img src=\"https://assets.listia.com/photos/906aea0f142d9ba040d5/original.jpg?s=320x320m&sig=7ccd9e662afed4e3&ts=1376259719\" [height]=\"height\" [width]=\"width\" style=\"margin: auto !important; width: 100%;\" />\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    LoadingIndicatorComponent.ctorParameters = function () { return []; };
    LoadingIndicatorComponent.propDecorators = {
        "height": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
    };
    return LoadingIndicatorComponent;
}());
exports.LoadingIndicatorComponent = LoadingIndicatorComponent;
function LoadingIndicatorComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoadingIndicatorComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoadingIndicatorComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LoadingIndicatorComponent.propDecorators;
    /** @type {?} */
    LoadingIndicatorComponent.prototype.height;
    /** @type {?} */
    LoadingIndicatorComponent.prototype.width;
}
//# sourceMappingURL=loading-indicator.component.js.map