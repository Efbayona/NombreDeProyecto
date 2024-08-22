import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  public getCategoryList(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_CATEGORY_LIST,);
  }

}
