import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PowerModalService } from './power-modal.service';

@Component({
  selector: 'power-modal',
  templateUrl: './power-modal.component.html',
  styleUrls: ['./power-modal.component.scss']
})
export class PowerModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  constructor(private modalService:PowerModalService) {

  }

  ngOnInit() {
  }

  closeModal(){
    this.modalService.close();
  }

  cancelClick(event:KeyboardEvent){
    event.preventDefault();
    event.stopPropagation();
  }

}
