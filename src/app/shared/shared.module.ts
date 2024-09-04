import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ShowPasswordDirective} from "@app/shared/directives/password/show-password.directive";
import {LoadingComponent} from "@app/shared/layouts/loading/loading.component";
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {CardComponent} from "@app/shared/layouts/card/card.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import { FiltersComponent } from './layouts/filters/filters.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ImageViewerComponent } from './layouts/image-viewer/image-viewer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ShoppingCartComponent } from './layouts/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective,
    CardComponent,
    FiltersComponent,
    ImageViewerComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
	imports: [
		CommonModule,
		MatProgressBarModule,
		NgSelectModule,
		FormsModule,
		MatCheckboxModule
	],
  exports: [
    MatProgressBarModule,
    ShowPasswordDirective,
    LoadingComponent,
    InputMaskDirective,
    CardComponent,
    NgSelectModule,
    FormsModule,
    ImageViewerComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
