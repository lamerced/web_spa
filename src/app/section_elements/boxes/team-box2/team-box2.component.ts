import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-box2',
  templateUrl: './team-box2.component.html',
})
export class TeamBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
