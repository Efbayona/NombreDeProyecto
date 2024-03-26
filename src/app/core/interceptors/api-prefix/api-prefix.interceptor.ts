import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "@env/environment";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor(
    @Inject(DOCUMENT) document: any
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const urlRequest = request.clone({
      url: environment.api + request.url
    });

    return next.handle(urlRequest);
  }
}
