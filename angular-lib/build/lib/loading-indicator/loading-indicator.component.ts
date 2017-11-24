import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rd-loading-indicator',
  template: `
    <img src="https://assets.listia.com/photos/906aea0f142d9ba040d5/original.jpg?s=320x320m&sig=7ccd9e662afed4e3&ts=1376259719" [height]="height" [width]="width" style="margin: auto !important; width: 100%;" />
  `,
  styles: [`

  `]
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  @Input() height: any = 75;
  @Input() width: any = 75;

  constructor() { }

  ngOnInit() {
    //console.log('**** loading-indicator init() ****');
  }

  ngOnDestroy() {
    //console.log('**** loading-indicator destroy() ****');
  }
}