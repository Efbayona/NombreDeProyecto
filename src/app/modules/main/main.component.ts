import {Component, OnInit} from '@angular/core';
import {Categories} from "@app/modules/home/interfaces/home.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  value: boolean = false;
  categories: boolean = false;
  notificationList: Categories[] = [];
  cart: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  openCart() {
    this.cart = true;
    this.value = true;
  }

  openCategories() {
    this.categories = true;
    this.value = true;
  }

  navigateToHome() {
    this.router.navigateByUrl('/app/home').then();
  }

  navigateToAuth() {
    this.router.navigateByUrl('/').then();
  }


}
