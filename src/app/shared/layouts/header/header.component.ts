import {Component, HostListener} from '@angular/core';
import {Categories} from "@app/modules/home/interfaces/home.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  value: boolean = false;
  categories: boolean = false;
  notificationList: Categories[] = [];
  cart: boolean = false;


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const notificationContainer = document.querySelector('.notification-container');

    if (this.categories && notificationContainer && !notificationContainer.contains(target)) {
      this.categories = false;
    }
  }

  constructor(private router: Router) {
  }


  openCart() {
    this.cart = true;
  }

  closeCart() {
    this.cart = false;
  }

  openCategories(event: MouseEvent) {
    event.stopPropagation();
    this.categories = !this.categories;
  }

  navigateToHome() {
    this.router.navigateByUrl('/app/home').then();
  }

  navigateToAuth() {
    this.router.navigateByUrl('/').then();
  }

  navigateToFilter(){
    this.router.navigateByUrl('/app/product/filters').then();
  }

}
