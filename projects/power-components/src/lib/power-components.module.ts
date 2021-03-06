import { NgModule } from '@angular/core';
import { PowerFaInputComponent } from './power-fa-input/power-fa-input.component';
import { PowerMdInputComponent } from './power-md-input/power-md-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { CommonModule } from '@angular/common';
import { PowerTabPanelComponent } from './power-tab-panel/power-tab-panel.component';
import { PowerTabComponent } from './power-tab/power-tab.component';
import { PowerModalModule } from './power-modal/power-modal.module';
import { PowerMaskModule } from './power-mask/power-mask.module';

@NgModule({
  declarations: [PowerFaInputComponent,
                 PowerMdInputComponent,
                 InputRefDirective, 
                 PowerTabPanelComponent, 
                 PowerTabComponent],
  imports: [
    CommonModule
  ],
  exports: [PowerFaInputComponent,
            PowerMdInputComponent,
            InputRefDirective, 
            PowerTabComponent, 
            PowerTabPanelComponent,
            PowerModalModule,
            PowerMaskModule]
})
export class PowerComponentsModule { }
