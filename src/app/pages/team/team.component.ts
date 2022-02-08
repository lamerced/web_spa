import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Equipo - Textil la Merced",
    page: "Equipo"
  }


  team = [
    {
      image: "assets/images/our-team4/pic1.png",
      name: "Miguel Seminario",
      designation: "Jefe de Almacen",
      video: "https://player.vimeo.com/video/670370970?h=e92659d3ac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      img: "assets/images/video-bg.jpg",
    },
    {
      image: "assets/images/our-team4/pic2.png",
      name: "Nory Contreras",
      designation: "Control de Calidad",
      video: "https://player.vimeo.com/video/670371171?h=1a18ccd560&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      img: "assets/images/video-bg2.jpg",
    },
    {
      image: "assets/images/our-team4/pic3.png",
      name: "Luis Vargas",
      designation: "Operario de Rama",
      video: "https://player.vimeo.com/video/670371370?h=573b45dcc0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      img: "assets/images/video-bg3.jpg",
    }
  ]


}
