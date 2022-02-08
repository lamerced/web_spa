import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team3',
  templateUrl: './team3.component.html',
})
export class Team3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
