import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare  var jQuery:  any;
declare  var about_home:  any;

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
})
export class About1Component implements AfterViewInit {

  @Input() data: any;
  
  constructor() { }

  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        about_home();
        }, 0);
      })(jQuery);
  }

}
