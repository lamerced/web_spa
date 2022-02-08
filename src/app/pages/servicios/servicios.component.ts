import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  trustedDashboardUrl : SafeUrl;


  constructor(private sanitizer: DomSanitizer) { 


    }

    ngOnInit() {

      this.trustedDashboardUrl =
                        this.sanitizer.bypassSecurityTrustResourceUrl
                            ("https://www.youtube.com/embed/osBgvsMTH8c");

    
  }


  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Servicios - Textil la Merced",
    page: "Servicios"
  }


  home = [
    {
      title: "Termofijado",
      image: "assets/images/icon/130-home.png",
      subtitle: "Personaliza tus telas con patrones de moda. (Proximamente)",
      seccion: "seccion-1"
    },
    {
      title: "Tintoreria",
      image: "assets/images/icon/131-home.png",
      subtitle: "Añade colores vibrantes a tus bases textiles.",
      seccion: "seccion-2"
    },
    {
      title: "Acabados",
      image: "assets/images/icon/132-home.png",
      subtitle: "Agrega valor a tus telas con procesos quimicos y fisicos que mejoran el tacto y el desempeño de estas.",
      seccion: "seccion-3"
    },
    {
      title: "Telas",
      image: "assets/images/icon/133-home.png",
      subtitle: "Encuentra las mejores textiles, con el respaldo de Textil la Merced. (Proximamente)",
      seccion: "seccion-4"
    }
  ]


  save() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }


  
}
