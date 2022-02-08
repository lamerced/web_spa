import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Tecnologias - Textil la Merced",
    page: "Tecnologías"
  }

  faq = [
    {
      serial: "1",
      icon: "assets/images/technology/1.jpg",
      title: "TERMOFIJADORA MERSAN",
      description: "Tecnología vanguardista de homogenización de campos resultando en una fijación técnicamente superior de spandex obteniendo un dimensionamiento, estabilidad y presentación para un mercado de alta exigencia."
    },
    {
      serial: "2",
      icon: "assets/images/technology/2.jpg",
      title: "HIDROEXTRACTORA CORINO",
      description: "Con tecnología “Albatros”y la calibración minuciosa del “pick up” deseado, logramos una excelente homogenización de tacto y un retorno adecuado de las fibras que compone el articulo en proceso."
    },
    {
      serial: "3",
      icon: "assets/images/technology/3.jpg",
      title: "COMPACTADORA FERRARO",
      description: "Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
    },
    {
      serial: "4",
      icon: "assets/images/technology/4.jpg",
      title: "TERMOACABADO DE POLIESTER SINTEC",
      description: "Utilizando una tecnología superior e innovadora entregamos un termo acabado sintetico homogéneo regulable en características de brillantez, demostrando un enrollado de precisión superior a las expectativas de nuestros clientes."
    },
    {
      serial: "6",
      icon: "assets/images/technology/5.jpg",
      title: "RAMA UNITECH",
      description: "Precisión, tecnología vanguardista, eficiencia en reducción de mermas, excelente desempeño en artículos delicados, empaquetado automatizado resultan en un producto final de alta demanda."
    },
    {
      serial: "5",
      icon: "assets/images/technology/6.jpg",
      title: "ABRIDORA CORINO",
      description: "Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]
}
