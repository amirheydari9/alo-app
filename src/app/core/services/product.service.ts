import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../../data/models/IProduct';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getProductByYearId(id: string): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products?year_id=' + id);
  }
}
