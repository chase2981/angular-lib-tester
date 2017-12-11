import { Component, ViewContainerRef } from '@angular/core';

import { CompiledResultModel, TemplateCompiler } from 'angular-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textEditorNgModel: string;
  textEditorConfig = {
    customConfig: '/assets/ckeditor-slim.config.js',
    htmlEncodeOutput: true
  };
  title = 'app';

  constructor(private templateCompiler: TemplateCompiler, private viewContainerRef: ViewContainerRef){

  }

  ngOnInit(){
    this.templateCompiler.compile('/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, this.viewContainerRef, []).subscribe((result: CompiledResultModel) => {
      console.log('data.json', result);
    });
  }
}
