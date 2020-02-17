import { Component, OnInit } from '@angular/core';
import { SimulationFormService } from '../service/simulation-form.service';
import { Simulation } from 'src/app/models/Simulation';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simulator-form',
  templateUrl: './simulator-form.component.html',
  styleUrls: ['./simulator-form.component.css']
})
export class SimulatorFormComponent implements OnInit {


  formSimulation = new FormGroup(
    {
      originField: new FormControl(''),
      destinationField: new FormControl(''),
      callTimeField: new FormControl(''),
      talkMorePlanField: new FormControl(''),
    }
  );
  dddList = [11, 16, 17, 18];
  planList = [30, 60, 120];
  simulation: Simulation;
  simulationResponse;
  formValidated = true;

  constructor(private simulationFormService: SimulationFormService) {
  }
  ngOnInit(): void {
    this.clean();
  }
  clean(): void {
    this.simulation = new Simulation();
  }

  /**
   * pegar o simulation e direcionar para o service;
   * atribuir à simulation o que vier de resposta do service
   */
  calculate(): void {
    if (this.formValidate()) {
      const response = this.simulationFormService.obtainCalculation(this.simulation);
      response.subscribe(value => {
        const key = 'data';
        this.simulation = value[key];
      });
    }
  }

  formValidate(): boolean {
    this.formValidated = (this.simulation.plan != null &&
      (this.simulation.callTime != null) &&
       this.simulation.origin != null && this.simulation.destination != null);
    return this.formValidated;
  }

  selectItem(emit, type: string): void {
    const emitterValue = emit.selectedItem;
    switch (type) {
      case 'origin':
        this.simulation.origin = emitterValue;
        break;
      case 'destination':
        this.simulation.destination = emitterValue;
        break;
      case 'plan':
        this.simulation.plan = emitterValue;
        break;
    }
  }

  changeCallTime(event): void {
    this.simulation.callTime = event.fieldValue;
  }




}
