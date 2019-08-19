import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { PowerModalService } from './power-modal.service';

@Directive({
  selector: '[powerModalOpenOnClick]'
})
export class PowerModalOpenOnClickDirective implements OnInit,OnDestroy {

  elements : HTMLBaseElement[];
  
  @Input()
  set powerModalOpenOnClick(els){
    
    if(els.length){
      this.elements = els;
    }else{
      this.elements = [els];
    }
    this.elements.forEach((el)=>{
      el.addEventListener('click',this.clickHandler);
    });
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService:PowerModalService) { }

  ngOnInit(){
    this.modalService.close$.subscribe(()=>this.viewContainer.clear());
  }

  ngOnDestroy(){
    this.elements.forEach((el)=>{
      el.removeEventListener('click',this.clickHandler);
    });
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);    
  }).bind(this);
}
