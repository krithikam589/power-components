import { Component, AfterContentInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'power-md-input',
  templateUrl: './power-md-input.component.html',
  styleUrls: ['./power-md-input.component.scss']
})
export class PowerMdInputComponent implements AfterContentInit {

  @Input()
  icon:string;

  @ContentChild(InputRefDirective,{static:false})
  input:InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if(!this.input){
      console.error("the power-md-input needs an input inside its content!");
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input? this.input.focus:false;
  }

}
