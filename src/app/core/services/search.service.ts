import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountriesInterface, DetailsCountriesInterface} from '../mocks';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiURL = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<CountriesInterface>{
    return this.http.get<CountriesInterface>(`${this.apiURL}all`);
  }

  getRegionCountries(): Observable<string[]>{
    return this.http.get<CountriesInterface[]>(`${this.apiURL}all`)
      .pipe(
        map(result => {
          const regions = result.map(r => r.region);
          return [...new Set(regions)];
        })
      );
  }

  getDetailsCountries(name: string): Observable<DetailsCountriesInterface>{
    return this.http.get<DetailsCountriesInterface>(`${this.apiURL}name/${name}`);
  }

}
