import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-box3',
  templateUrl: './service-box3.component.html',
})
export class ServiceBox3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
