import { Component } from '@angular/core';

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
}
