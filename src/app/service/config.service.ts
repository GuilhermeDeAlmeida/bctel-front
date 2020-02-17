import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simulation } from '../models/Simulation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ConfigService {
  private HOST = 'http://localhost:';
  private PORT = '8080/';

  private SERVER_URL =  this.HOST + this.PORT + 'api/';

  constructor(private http: HttpClient) { }

  requestSimulation(simulation: Simulation): Observable<Simulation> {
    const response = this.http.post<Simulation>(this.SERVER_URL + 'simulation', simulation);
    console.log('response on consfigService', response);
    return response;
  }
}
