import {Component, Input, OnInit} from '@angular/core';
import {Product} from "@app/modules/home/interfaces/home.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!: Product;

  ngOnInit() {
  }

}
