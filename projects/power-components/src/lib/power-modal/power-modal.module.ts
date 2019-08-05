import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerModalComponent } from './power-modal.component';
import { PowerModalOpenOnClickDirective } from './power-modal-open-on-click.directive';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PowerModalService } from './power-modal.service';

@NgModule({
  declarations: [PowerModalComponent,PowerModalOpenOnClickDirective],
  imports: [
    CommonModule
  ],
  exports:[PowerModalComponent, PowerModalOpenOnClickDirective]
})
export class PowerModalModule {

  static forRoot(): ModuleWithProviders{
    return {
      ngModule: PowerModalModule,
      providers: [PowerModalService]    
    };
  }

}
