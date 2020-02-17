import { Injectable } from '@angular/core';
import { Simulation } from 'src/app/models/Simulation';
import { ConfigService } from 'src/app/service/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationFormService {
  constructor(private configService: ConfigService) { }

  obtainCalculation(simulation: Simulation): Observable<Simulation> {
    simulation.time = simulation.time;
    console.log('definiu o plano', simulation);
    const response = this.configService.requestSimulation(simulation);
    console.log('response on Service', response);
    return response;
  }
}
