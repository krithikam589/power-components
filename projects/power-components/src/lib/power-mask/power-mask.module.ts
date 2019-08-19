import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerMaskDirective } from './power-mask.directive';



@NgModule({
  declarations: [PowerMaskDirective],
  imports: [
    CommonModule
  ],
  exports:[PowerMaskDirective]
})
export class PowerMaskModule { }
