import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html'
})
export class AboutUs1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "CONOCENOS - Textil La Merced",
    page: "Conocenos"
  }

  about = {
    slides: [
      {
        image: "assets/images/gallery/portrait/pic4.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic5.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic6.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic7.jpg"
      }
    ],
    experience: "25",
    author: "David Houkr",
    sign: "assets/images/Signature+Black.png",
    designation: "Architect & Founder"
  }

  specializations = [
    {
      serial: "1",
      icon: "assets/images/icon/crane-1.png",
      title: "Misión",
      description: "Ofrecer un servicio de tintorería y acabado diferenciado en el mercado nacional. Líderes en innovación y tecnología; satisfaciendo y cumpliendo los requerimiento de calidad velocidad y atención personalizada en beneficio de nuestros asociados dentro de un mercado exigente y evolución constante."
    },
    {
      serial: "2",
      icon: "assets/images/icon/renovation.png",
      title: "Visión",
      description: "Ser la industria en el mercado textil caracterizada por brindar la más alta credibilidad con énfasis en productos a la medida de todo nicho comercial."
    },
    {
      serial: "3",
      icon: "assets/images/icon/toolbox.png",
      title: "Politicas",
      description: "Estamos integrados con personal calificado y maquinarias de última generación, actualmente contamos con 2 líneas de acabado."
    }
  ]

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
