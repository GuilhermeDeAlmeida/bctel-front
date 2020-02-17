import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorFormComponent } from './simulator-form/simulator-form.component';
import { SimulationFormService } from './service/simulation-form.service';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SimulatorFormComponent, FormFieldComponent, FormSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SimulatorFormComponent,
    FormSelectComponent
  ],
  providers: [
    SimulationFormService
  ]

})
export class SimulationFormModule { }
