import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http/http.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {UserLoginRequest, UserLoginResponse} from "@app/modules/authentication/interfaces/authentication.interface";
import {
  DataMultiFactorAuthenticationResponse,
  MultiFactorAuthenticationRequest
} from "@app/modules/authentication/interfaces/multifactor-authentication.interface";
import {StorageService} from "@app/core/services/storage/storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _http: HttpService,
    private storage: StorageService,
    private router: Router
  ) {
  }

  public login(authLogin: UserLoginRequest): Observable<UserLoginResponse> {
    return this._http.post<UserLoginRequest, UserLoginResponse>(EndPoints.LOGIN, authLogin, true);
  }

  public sendMfa(data: MultiFactorAuthenticationRequest): Observable<DataMultiFactorAuthenticationResponse> {
    return this._http.post<MultiFactorAuthenticationRequest, DataMultiFactorAuthenticationResponse>(EndPoints.MFA, data);
  }

  public loginGoogle(): Observable<any> {
    return this._http.get<any>(EndPoints.LOGIN_GOOGLE);
  }

  public signedInSuccessfully(data: DataMultiFactorAuthenticationResponse): void {
    this.storage.setItem('access_token', data.token.access_token);
    this.storage.setItem('refresh_token', data.token.refresh_token);
    this.storage.setItem('user', data.user);
    this.storage.setItem('menu', data.modules);
    this.storage.setItem('permissions', data.permissions);
    setTimeout(() => {
      this.router.navigateByUrl('administration').then();
    }, 500)
  }

  public logout(): void {
    this.storage.removeAll();
    this.router.navigateByUrl('/').then();
  }

}
