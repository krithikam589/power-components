import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { PowerModalService } from './power-modal.service';

@Directive({
  selector: '[powerModalOpenOnClick]'
})
export class PowerModalOpenOnClickDirective implements OnInit {

  @Input()
  set powerModalOpenOnClick(els){
    let elements : HTMLBaseElement[];

    if(els.length){
      elements = els;
    }else{
      elements = [els];
    }
    elements.forEach((el)=>{
      el.addEventListener('click',()=>{
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);    
      });
    });
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService:PowerModalService) { }

  ngOnInit(){
    this.modalService.close$.subscribe(()=>this.viewContainer.clear());
  }
}
