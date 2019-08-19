import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PowerModalService } from './power-modal.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'power-modal',
  templateUrl: './power-modal.component.html',
  styleUrls: ['./power-modal.component.scss']
})
export class PowerModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;
  @Input()
  hideOnEsc=true;
  @Input()
  hideOnClickOutside=true;
  @Input()
  context:any;

  constructor(private modalService:PowerModalService, private eventManager:EventManager) {

  }

  onClickOutsideModal(){
    if(this.hideOnClickOutside){
      this.close();
    }
  }

  ngOnInit() {
    this.eventManager.addGlobalEventListener("window",'keyup.esc',()=>{
      if(this.hideOnEsc){
        this.close();
      }
    });
  }

  close(){
    this.modalService.close();
  }

  cancelClick(event:KeyboardEvent){
    event.preventDefault();
    event.stopPropagation();
  }

}
