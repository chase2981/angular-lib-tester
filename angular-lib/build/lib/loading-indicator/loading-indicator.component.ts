import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rd-loading-indicator',
  template: `
    <img src="https://www.rentdynamics.com/images/greendivider.png" [height]="height" [width]="width" style="margin: auto !important; width: 100%;" />
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
