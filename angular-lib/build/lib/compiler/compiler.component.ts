import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rd-compiler',
  template: `
    <p>
      compiler works!
    </p>
  `,
  styles: [`
    p {
      font-weight: bold;
    }
  `]
})
export class CompilerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
