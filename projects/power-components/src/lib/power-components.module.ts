import { NgModule } from '@angular/core';
import { PowerFaInputComponent } from './power-fa-input/power-fa-input.component';
import { PowerMdInputComponent } from './power-md-input/power-md-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { CommonModule } from '@angular/common';
import { PowerTabPanelComponent } from './power-tab-panel/power-tab-panel.component';
import { PowerTabComponent } from './power-tab/power-tab.component';


@NgModule({
  declarations: [PowerFaInputComponent,PowerMdInputComponent,InputRefDirective, PowerTabPanelComponent, PowerTabComponent],
  imports: [
    CommonModule
  ],
  exports: [PowerFaInputComponent,PowerMdInputComponent,InputRefDirective, PowerTabComponent, PowerTabPanelComponent]
})
export class PowerComponentsModule { }
