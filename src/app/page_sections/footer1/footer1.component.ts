import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
})
export class Footer1Component implements OnInit {

  @Input() page: any;

  constructor() { }

  ngOnInit(): void {
  }

}
