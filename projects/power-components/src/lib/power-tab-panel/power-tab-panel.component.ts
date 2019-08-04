import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { PowerTabComponent } from '../power-tab/power-tab.component';

@Component({
  selector: 'power-tab-panel',
  templateUrl: './power-tab-panel.component.html',
  styleUrls: ['./power-tab-panel.component.scss']
})
export class PowerTabPanelComponent implements AfterContentInit {

  @ContentChildren(PowerTabComponent)
  tabs:QueryList<PowerTabComponent>
  
  @Input()
  headerTemplate:TemplateRef<any>;

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab=>tab.selected);
    if(!selectedTab && this.tabs.first){
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab:PowerTabComponent){
    this.tabs.forEach(tab=>tab.selected=false);
    tab.selected=true;
    console.log(tab.title+" is selected!");
  }

  get tabsContext(){
    return {
      tabs: this.tabs 
    };
  }

}
