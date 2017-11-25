/// <reference types="ckeditor" />
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgModelInput } from './ng-model-input';
import 'ckeditor';
export declare class TextEditorDirective extends NgModelInput implements OnInit, AfterViewInit, OnDestroy {
    private changeDetectorRef;
    ngModel: string;
    options: {};
    change: EventEmitter<string>;
    inline: boolean;
    editor: CKEDITOR.editor;
    elem: HTMLTextAreaElement;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initInlineEditor(): CKEDITOR.editor;
    initClassicEditor(): CKEDITOR.editor;
    subscribeToChangeEvent(): void;
    writeValue(newVal: any): void;
    ngOnDestroy(): void;
}
