import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IYear} from '../../data/models/IYear';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private http: HttpClient
  ) {
  }

  getYears(): Observable<IYear[]> {
    return this.http.get<IYear[]>('http://localhost:3000/years');
  }
}
