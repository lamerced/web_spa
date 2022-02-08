import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
})
export class Banner1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
