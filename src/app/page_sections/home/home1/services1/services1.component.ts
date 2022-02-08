import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
})
export class Services1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
