import {Component} from '@angular/core';
import {Categories} from "@app/modules/home/interfaces/home.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  value: boolean = false;
  categories: boolean = false;

  notificationList: Categories[] = [];


  openCart() {

  }


}
