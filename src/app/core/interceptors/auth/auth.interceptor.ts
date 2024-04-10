import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpContextToken
} from '@angular/common/http';
import {catchError, Observable, of, switchMap, tap, throwError} from 'rxjs';
import {EndPoints} from "@app/core/utils/end-points";
import {StorageService} from "@app/core/services/storage/storage.service";
import {
  TokenRefreshRequest,
  TokenRefreshResponse
} from "@app/modules/authentication/interfaces/authentication.interface";
import {TokenService} from "@app/core/services/token/token.service";
import {AuthenticationService} from "@app/modules/authentication/services/authentication.service";
import {AlertService} from "@app/core/services/alert/alert.service";

export const CLEAR_AUTHORIZATION = new HttpContextToken(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService,
              private token: TokenService,
              private auth: AuthenticationService,
              private alert: AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isRefreshTokenRequest: boolean = request.url.includes(EndPoints.TOKEN_REFRESH);
    if (!isRefreshTokenRequest) {
      return this.refreshToken().pipe(
        switchMap(() => {
          const access_token: string = this.storage.getItem('access_token');
          if (!request.context.get(CLEAR_AUTHORIZATION) && access_token) {
            request = AuthInterceptor.addTokenHeader(request, access_token);
          }
          return next.handle(request);
        }),
        catchError((error) => {
          if (error.status == 401 && error.error.message === 'Token expired') {
            this.auth.logout();
            this.alert.warning('Tiempo expirado , vuelve a iniciar sesión');
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private refreshToken(): Observable<TokenRefreshResponse | null> {
    const token: string = this.storage.getItem('refresh_token');
    if (token) {
      const data: TokenRefreshRequest = {
        refresh_token_id: token,
      }
      return this.token.refresh(data).pipe(
        tap((data: TokenRefreshResponse) => {
          this.storage.setItem('access_token', data.access_token);
          this.storage.setItem('refresh_token', data.refresh_token);
        })
      );
    } else {
      return of(null);
    }
  }

  private static addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
  }
}
