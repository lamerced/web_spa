import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html'
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specializations = [
    {
      image: "assets/images/pic1.jpg",
      title: "Teñidos.",
      subtitle: "Servicios de teñido."
    },
    {
      image: "assets/images/pic2.jpg",
      title: "Lineas",
      subtitle: "Lineas de acabado."
    },
    {
      image: "assets/images/pic3.jpg",
      title: "Acabados",
      subtitle: "Servicios de acabado."
    }
  ]

  aboutSlides = [
    {
      image: "assets/images/gallery/1.jpg"
    },
    {
      image: "assets/images/gallery/2.jpg"
    },
    {
      image: "assets/images/gallery/3.jpg"
    },
    {
      image: "assets/images/gallery/4.jpg"
    },
    {
      image: "assets/images/gallery/5.jpg"
    },
    {
      image: "assets/images/gallery/6.jpg"
    },
    {
      image: "assets/images/gallery/7.jpg"
    },
    {
      image: "assets/images/gallery/8.jpg"
    },
    {
      image: "assets/images/gallery/9.jpg"
    },
    {
      image: "assets/images/gallery/10.jpg"
    }
  ]

  ourValue = {
    author: {
      name: "Miguel Angel Seminario",
      designation: "Jefe de Almacen",
      sign: "assets/images/Signature+Black.png"
    },
    video: "https://player.vimeo.com/video/670370970?h=e92659d3ac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    facts: [
      {
        figure: "120",
        title: "Colaboradores"
      },
      {
        figure: "150",
        title: "Contratistas"
      },
      {
        figure: "500",
        title: "Stakeholders"
      }
    ],
    experience: "15",
    exData: [
      {
        title: "Actuamos con proposito",
        percent: "100"
      },
      {
        title: "Buscamos la excelencia siempre",
        percent: "100"
      },
      {
        title: "Aceptamos fracasar como aprendizaje",
        percent: "100"
      },
      {
        title: "Lideramos y escuchamos",
        percent: "100"
      },
      {
        title: "Somos un equipo",
        percent: "100"
      }
    ],
    exDataEtica: [
      {
        title: "Buscamos erradicar el impacto ambiental.",
        percent: "100"
      },
      {
        title: "Trabajamos con insumor organicos y biodegradables.",
        percent: "100"
      },
      {
        title: "Invertimos en reducir nuestro consumo de energia.",
        percent: "100"
      },
      {
        title: "Crecimiento proporcional al bienestar de colaboradores.",
        percent: "100"
      },
      {
        title: "Las mejores practicas para un crecimiento sostenido.",
        percent: "100"
      }
    ]
  }


  home = [
    {
      title: "Termofijado",
      image: "assets/images/icon/130-home.png",
      subtitle: "Personaliza tus telas con patrones de moda. Proximamente"
    },
    {
      title: "Teñidos",
      image: "assets/images/icon/131-home.png",
      subtitle: "Añade colores vibrantes a tus bases textiles."
    },
    {
      title: "Acabados",
      image: "assets/images/icon/132-home.png",
      subtitle: "Agrega valor a tus telas con procesos quimicos y fisicos que mejoran el tacto y el desempeño de estas."
    },
    {
      title: "Telas",
      image: "assets/images/icon/133-home.png",
      subtitle: "Encuentra las mejores textiles, con el respaldo de Textil la Merced. (Proximamente)"
    },
    // {
    //   title: "Estampados",
    //   image: "assets/images/icon/fibra.png",
    //   subtitle: "(Proximamente)"
    // },
    // {
    //   title: "Terchados",
    //   image: "assets/images/icon/perchero.png",
    //   subtitle: "(Proximamente)"
    // }
  ]





  services = [
    {
      title: "Servicio de Teñido",
      serial: "1",
      icon: "assets/images/icon/crane-1.png",
      description: "Somos una empresa dedicada al servicio de teñido y acabado de tela tubular y abierta, brindamos."
    },
    {
      title: "Servicio de acabado ",
      serial: "2",
      icon: "assets/images/icon/renovation.png",
      description: "Nos caracterizamos por brindar un servicio de calidad y tiempo acordado con todos nuestros clientes."
    },
    {
      title: "Lineas de acado",
      serial: "3",
      icon: "assets/images/icon/toolbox.png",
      description: "Estamos integrados con personal calificado y maquinarias de última generación, actualmente contamos con 2 líneas de acabado."
    }
  ]






  testimonials = [
    {
      image: "assets/images/our-team4/pic1.png",
      name: "Miguel Seminario",
      designation: "Jefe de Almacen",
      quote: "Tengo trabajando 7 años en TLM y en la actualidad soy jefe de almacen, aqui en textil la merced se aplica la responsabilidad, trabajo en equipo, puntualidad."
    },
    {
      image: "assets/images/our-team4/pic2.png",
      name: "Nory Contreras",
      designation: "Control de Calidad",
      quote: "Tengo trabajando 7 años en TLM y en la actualidad soy jefe de almacen, aqui en textil la merced se aplica la responsabilidad, trabajo en equipo, puntualidad."
    },
    {
      image: "assets/images/our-team4/pic3.png",
      name: "Luis Vargas",
      designation: "Operario de Rama",
      quote: "Tengo trabajando 7 años en TLM y en la actualidad soy jefe de almacen, aqui en textil la merced se aplica la responsabilidad, trabajo en equipo, puntualidad."
    }
  ]


}
