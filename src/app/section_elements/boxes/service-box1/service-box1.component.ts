import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-box1',
  templateUrl: './service-box1.component.html',
})
export class ServiceBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
