import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenido',
  templateUrl: './tenido.component.html',
  styleUrls: ['./tenido.component.css']
})
export class TenidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Teñido - Textil la Merced",
    page: "Teñido"
  }



  specializations = [
    {
      image: "assets/images/services/reactivo.jpg",
      title: "Teñido Reactivo",
      subtitle: "Proceso que utiliza colorantes de naturaleza reactiva con el fin de entregar características de solidez – resistencia de penetración de colorante – por medio de enlaces covalentes."
    },
    {
      image: "assets/images/services/fibra.jpg",
      title: "Teñido doble Filo",
      subtitle: "Es la combinación de fibras orgánicas y sintéticas, utiliza procesos de mayor duración resultando en una diferenciación especial y valor agregado."
    },
    {
      image: "assets/images/services/disperso.jpg",
      title: "Teñido Disperso",
      subtitle: "Teñido de fibras sintéticas a través de procesos veloces de agotamiento, utilizando máquinas diferenciadas para la homogenización y buen rendimiento del substrato."
    }
  ]

}
