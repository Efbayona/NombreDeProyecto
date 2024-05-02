import {Component, OnInit} from '@angular/core';
import {Categories} from "@app/modules/main/interfaces/home.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  value: boolean = false;
  menuCategories: boolean = false;

  notificationList: Categories[] = [];

  slides = [
    {src: "/assets/images/carousel/carousel-3.jpg"},
    {src: "/assets/images/carousel/carousel-4.jpg"},
    {src: "/assets/images/carousel/camiseta-negra.jpg"},
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

  navigate() {
    this.router.navigateByUrl('/product').then();
  }

}
