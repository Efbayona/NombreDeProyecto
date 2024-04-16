import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http/http.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor(private http: HttpService) {
  }

  public existUserName(username: string): Observable<boolean> {
    return this.http.get<boolean>(EndPoints.EXIST_USERNAME + username);
  }

  public existEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(EndPoints.EXIST_EMAIL + email);
  }

  public existDocument(document: string): Observable<boolean> {
    return this.http.get<boolean>(EndPoints.EXIST_DOCUMENT + document);
  }
}
