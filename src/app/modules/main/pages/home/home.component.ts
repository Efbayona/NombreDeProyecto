import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {src: "/assets/images/carousel/camiseta-negra.jpg"},
    {src: "/assets/images/carousel/camiseta-verde.png"},
    {src: "/assets/images/carousel/camiseta-negra.png"},
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
