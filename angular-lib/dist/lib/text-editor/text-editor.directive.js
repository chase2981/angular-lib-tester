"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_model_input_1 = require("./ng-model-input");
require("ckeditor");
var TextEditorDirective = (function (_super) {
    __extends(TextEditorDirective, _super);
    /* todo: wire up onNgModelTouched() */
    function TextEditorDirective(changeDetectorRef, elementRef) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.ngModel = null;
        _this.options = {};
        _this.change = new core_1.EventEmitter();
        _this.inline = false;
        _this.elem = elementRef.nativeElement;
        return _this;
    }
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        CKEDITOR.disableAutoInline = true;
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.editor = this.inline ? this.initInlineEditor() : this.initClassicEditor();
        //Updates the <textarea> element that was replaced by the editor with the current data available in the editor.
        this.editor.setData(this.ngModel);
        this.subscribeToChangeEvent();
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.initInlineEditor = /**
     * @return {?}
     */
    function () {
        return CKEDITOR.inline(this.elem, this.options);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.initClassicEditor = /**
     * @return {?}
     */
    function () {
        return CKEDITOR.replace(this.elem, this.options);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.subscribeToChangeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.editor.on('change', function () {
            var /** @type {?} */ newVal = _this.editor.getData();
            _this.onNgModelChanged(newVal);
            _this.change.emit(newVal);
            //this.changeDetectorRef.markForCheck();
        });
    };
    /* Override writeValue() of NgModelInput class */
    /**
     * @param {?} newVal
     * @return {?}
     */
    TextEditorDirective.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        _super.prototype.writeValue.call(this, newVal);
        if (this.editor)
            this.editor.setData(newVal);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.removeAllListeners();
            //this.editor.destroy();
        }
    };
    TextEditorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'rd-text-editor, [rd-text-editor]',
                    providers: [new ng_model_input_1.NgModelInputValueAccessor(TextEditorDirective)]
                },] },
    ];
    /** @nocollapse */
    TextEditorDirective.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef, },
        { type: core_1.ElementRef, },
    ]; };
    TextEditorDirective.propDecorators = {
        "ngModel": [{ type: core_1.Input },],
        "options": [{ type: core_1.Input },],
        "change": [{ type: core_1.Output },],
        "inline": [{ type: core_1.HostBinding, args: ['contentEditable',] }, { type: core_1.Input },],
    };
    return TextEditorDirective;
}(ng_model_input_1.NgModelInput));
exports.TextEditorDirective = TextEditorDirective;
function TextEditorDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextEditorDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextEditorDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TextEditorDirective.propDecorators;
    /** @type {?} */
    TextEditorDirective.prototype.ngModel;
    /** @type {?} */
    TextEditorDirective.prototype.options;
    /** @type {?} */
    TextEditorDirective.prototype.change;
    /** @type {?} */
    TextEditorDirective.prototype.inline;
    /** @type {?} */
    TextEditorDirective.prototype.editor;
    /** @type {?} */
    TextEditorDirective.prototype.elem;
    /** @type {?} */
    TextEditorDirective.prototype.changeDetectorRef;
}
//# sourceMappingURL=text-editor.directive.js.map