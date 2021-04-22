import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Year} from '../../data/models/Year';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private http: HttpClient
  ) {
  }

  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>('http://localhost:3000/years');
  }
}
