import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }


  public getCategoriesList(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_CATEGORY_LIST + '/cd873061-b71c-4ab9-b5c3-e283774f454b');
  }

}
