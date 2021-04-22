import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Years} from '../../data/models/Years';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getYears(): Observable<Years[]> {
    return this.http.get<Years[]>('http://localhost:3000/products');
  }
}
