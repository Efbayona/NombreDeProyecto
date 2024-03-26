import { Injectable } from '@angular/core';
import {HttpService} from "@app/core/services/http/http.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpService ) { }

  public login(authLogin: any): Observable<any>{
    return this._http.post<any, any>(EndPoints.LOGIN , authLogin , true);
  }

}
