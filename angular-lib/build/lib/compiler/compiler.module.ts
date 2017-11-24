import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompilerComponent } from './compiler.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompilerComponent
  ],
  exports: [
    CompilerComponent
  ]
})
export class CompilerModule { }
