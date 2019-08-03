import { NgModule } from '@angular/core';
import { PowerFaInputComponent } from './power-fa-input/power-fa-input.component';
import { PowerMdInputComponent } from './power-md-input/power-md-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [PowerFaInputComponent,PowerMdInputComponent,InputRefDirective],
  imports: [
    CommonModule
  ],
  exports: [PowerFaInputComponent,PowerMdInputComponent,InputRefDirective]
})
export class PowerComponentsModule { }
