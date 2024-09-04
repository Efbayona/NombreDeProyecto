import {Component, HostListener, OnInit} from '@angular/core';
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




}
