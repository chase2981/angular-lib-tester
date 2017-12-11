/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { CompilerModule } from './compiler.module';
import { TemplateCompiler } from './template-compiler';

describe('TemplateCompiler', () => {

    it('compile() results in templateUrl being compiled to html string', () => {
        // todo: wire this up
    });

});