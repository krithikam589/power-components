import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';


@Component({
  selector: 'power-fa-input',
  //encapsulation: ViewEncapsulation.Emulated, //default
  templateUrl: './power-fa-input.component.html',
  styleUrls: ['./power-fa-input.component.scss']
})
export class PowerFaInputComponent implements AfterContentInit {

  @Input() 
  icon:string;

  @ContentChild(InputRefDirective, {static: false})
  input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if(!this.input){
      console.error("power-fa-input needs an input inside it's content!");
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {};
    if(this.icon){
      cssClasses['fa-'+this.icon]= true;
    }
    return cssClasses;
  }

}
