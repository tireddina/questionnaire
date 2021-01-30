import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private _url: string = "http://localhost:3000/api/"
  constructor(private http: HttpClient) { }
  headers = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  private _refresh = new Subject<void>()

  get refresh() {
    return this._refresh
  }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this._url + 'questions/')
  }

  getDetails(id): Observable<any> {
    return this.http.get(this._url + 'questions/' + id)
  }
  
  delete(id): Observable<any> {
    return this.http.delete(this._url + 'admin/' + id).pipe(
      tap(() => {
        this._refresh.next()
      })
    )
  }

  onAnswerSend(id, email, answers, possibleOneAns, correctAns): Observable <any> {
    return this.http.post(this._url + 'answers/', {id, email, answers, possibleOneAns, correctAns}, this.headers)
  }

  getAnswer(id): Observable <any> {
    return this.http.get(this._url + 'answer/' + id)
  }

  getAnswers(id): Observable<any> {
    return this.http.get(this._url + 'answers/' + id)
  }
}
