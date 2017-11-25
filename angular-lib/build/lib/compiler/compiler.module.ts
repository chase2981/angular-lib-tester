import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CompilerComponent } from './compiler.component';
import { CompilerService } from './compiler.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    CompilerComponent,
  ],
  exports: [
    CompilerComponent,
    HttpModule,
  ],
  providers: [
    CompilerService
  ]
})
export class CompilerModule { }
