import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
})
export class About3Component implements OnInit {

  @Input() data: any;
  @Input() title: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
