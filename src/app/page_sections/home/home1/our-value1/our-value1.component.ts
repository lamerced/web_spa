import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-value1',
  templateUrl: './our-value1.component.html',
})
export class OurValue1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
