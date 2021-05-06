import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UnsplashInterface} from '../unsplash.interface';



@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiKEY = '&client_id=f4fcKLuGnw3BmQPnSpjQxBEOTQISbo49Dfh7hwykUsM';
  private apiURL = 'https://api.unsplash.com//search/photos?page=1&query=';

  constructor(private http: HttpClient) { }


  getUnsplash(query: string): Observable<UnsplashInterface>{
    return this.http.get<UnsplashInterface>(`${this.apiURL}${query}${this.apiKEY}`);
  }
}
