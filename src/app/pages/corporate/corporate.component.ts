import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html'
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Gobierno Corporativo - Textil la Merced",
    page: "Equipo"
  }

}
