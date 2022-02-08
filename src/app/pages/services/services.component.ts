import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Servicios - Textil la Merced",
    page: "Servicios"
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

  services = [
    {
      icon: "assets/images/services/dryfit.jpg",
      title: "Dry Fit",
      description: "Es un acabado que repele el sudor asía la superficie del tejido. Logrando mayor satisfacción ene l cliente final."
    },
    {
      icon: "assets/images/services/acabterial.jpg",
      title: "Anti Bacterial",
      description: "Es un acabado que protege de todo tipo de bacterias que se encuentra en la superficie. En este caso. El tejido es protegido y se hace resistente al crecimiento microbiano."
    },
    {
      icon: "assets/images/services/afluido.jpg",
      title: "Anti Fluido",
      description: "Es un acabado que cumple la propiedad de repeler los líquidos del ambiente. protegiendo al usuario el contagio de las enfermedades que se transmiten x el medio ambiente."
    },
    {
      icon: "assets/images/services/suavizado.jpg",
      title: "Suavizado",
      description: "Es un producto eficaz para toda clase de fibras en general y para las sintéticas en particular, en todos los estados de presentación. Está especialmente indicado para hilados open-end."
    },
    {
      icon: "assets/images/services/siliconado.jpg",
      title: "Siliconado",
      description: "IEs muy conveniente como suavizante hidrofóbico en los procesos de acabados de tejidos y prendas. SIL TEX -CONC: Proporciona al tejido tacto muy suave, liso y efecto antiestático mejora la costurabilidad."
    },
    {
      icon: "assets/images/services/rezinado.jpg",
      title: "Resinado",
      description: "Es un producto antiarrugas, con bajo contenido de formaldehído, para tejidos de fibras celulósicas y mezclas. También son agentes que sirven para la estabilidad dimensional de la tela. Como encogimientos."
    }
  ]



  about = {
    experience: "15",
    exData: [
      {
        title: "Linea de Acabado",
        percent: "85"
      },
      {
        title: "Construction",
        percent: "78"
      },
      {
        title: "Interior",
        percent: "40"
      }
    ]
  }

  projects = [
    {
      category: "cat-1",
      image: "assets/images/services/service-projects/shooping-mall.jpg",
      title: "Shopping Mall",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-2",
      image: "assets/images/services/service-projects/hospital.jpg",
      title: "Hospital Building",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-3",
      image: "assets/images/services/service-projects/garden-house.jpg",
      title: "Garden House",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-4",
      image: "assets/images/services/service-projects/villa.jpg",
      title: "Villa",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-5",
      image: "assets/images/services/service-projects/road-construction.jpg",
      title: "Road Construction",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-4",
      image: "assets/images/services/service-projects/bridge.jpg",
      title: "Bridge Construction",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-3",
      image: "assets/images/services/service-projects/building-ren.jpg",
      title: "Building Renovation",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-2",
      image: "assets/images/services/service-projects/dam-construction.jpg",
      title: "Dam Construction",
      place: "Muscat, Sultanate of Oman"
    }
  ]

  faq = {
    faq: [
      {
        serial: "1",
        title: "Choose between rates or instant payment",
        description: "Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipi scing vitae est. Sed nec felis pellentesque, lacinia dui sed"
      },
      {
        serial: "2",
        title: "Come to see a live preview",
        description: "Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success."
      },
      {
        serial: "3",
        title: "Choose the correct service",
        description: "The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      }
    ],
    solutions: [
      {
        icon: "flaticon-sketch",
        title: "Assistance",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
        background: "bg-gray",
        text: "text-black",
        link: ""
      },
      {
        icon: "flaticon-ui",
        title: "Financing",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
        background: "bg-dark",
        text: "text-white",
        link: "yellow"
      }
    ]
  }
}
