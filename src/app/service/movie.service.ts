import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getMovie(urlconstant: string) {
    return this.http.get<any>(urlconstant);
  }

}
