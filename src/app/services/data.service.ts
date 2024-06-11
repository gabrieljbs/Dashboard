import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = '';
  constructor(private http: HttpClient) {

   }

   getData(): Observable<any>{
 
    return this.http.get(this.apiUrl)
  }

}
