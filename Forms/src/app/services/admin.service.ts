import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url: string = "http://localhost:3000/api/"
  constructor(private http: HttpClient) { }
  headers = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  sendQuestionList(list): Observable<any> {
    return this.http.post(this._url + 'admin/', list, this.headers).pipe()
  }
  
  login(user): Observable<any> {
    return this.http.post(this._url + 'user/login/', user, this.headers).pipe()
  }

  registration(user): Observable<any> {
    return this.http.post(this._url + 'user/signup/', user, this.headers).pipe()
  }
}
