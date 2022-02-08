import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
})
export class HomeServicesComponent implements OnInit {

  @Input() data: any;


  constructor() { }

  ngOnInit(): void {
  }

}
