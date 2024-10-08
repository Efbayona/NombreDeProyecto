import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "@app/core/interceptors/api-prefix/api-prefix.interceptor";
import {NgxWebstorageModule} from "ngx-webstorage";
import {SharedModule} from "@app/shared/shared.module";
import {MainComponent} from "@app/modules/main/main.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {OauthInterceptor} from "@app/core/interceptors/oauth/oauth.interceptor";
import _default from '@angular/common/locales/es-CO';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {AuthInterceptor} from "@app/core/interceptors/auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: _default
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: _default[0]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OauthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
