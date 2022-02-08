import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acabado',
  templateUrl: './acabado.component.html',
  styleUrls: ['./acabado.component.css']
})
export class AcabadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Acabado - Textil la Merced",
    page: "Acabado"
  }




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



  
}
