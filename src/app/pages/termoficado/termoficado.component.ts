import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termoficado',
  templateUrl: './termoficado.component.html',
  styleUrls: ['./termoficado.component.css']
})
export class TermoficadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Termoficado - Textil la Merced",
    page: "Termoficado"
  }

}
