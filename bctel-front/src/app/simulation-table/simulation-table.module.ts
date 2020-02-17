import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorTableComponent } from './components/simulator-table/simulator-table.component';



@NgModule({
  declarations: [SimulatorTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SimulatorTableComponent
  ]
})
export class SimulationTableModule { }
