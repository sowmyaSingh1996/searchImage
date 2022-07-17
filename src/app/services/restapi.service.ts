import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, timeout,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  inernet_message: any = 'Ooops! You are not connected internet. Please check.';

  API_URL_PIX = 'https://pixabay.com/api/'
  
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let resObj: any = res;
    return resObj || {};
  }

  getPIXAPI(cPath): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      })
    };
    if (navigator.onLine) {
      return this.http.get(this.API_URL_PIX + cPath, httpOptions).pipe(
        timeout(30000),
        tap((data) => {
        }),
        map(this.extractData),
      );
    } else {
      window.alert(this.inernet_message);
    }
  }
}
