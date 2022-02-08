import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-box2',
  templateUrl: './grid-box2.component.html',
})
export class GridBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }


  
}
