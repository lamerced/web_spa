import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-box1',
  templateUrl: './grid-box1.component.html',
})
export class GridBox1Component implements OnInit {

  @Input() data: any;
  @Input() zoom: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
