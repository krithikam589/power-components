import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PowerComponentsModule } from 'projects/power-components/src/public-api';
import { PowerFaInputComponent } from 'projects/power-components/src/lib/power-fa-input/power-fa-input.component';
import { PowerMdInputComponent } from 'projects/power-components/src/lib/power-md-input/power-md-input.component';
import { PowerTabComponent } from 'projects/power-components/src/lib/power-tab/power-tab.component';
import { PowerTabPanelComponent } from 'projects/power-components/src/lib/power-tab-panel/power-tab-panel.component';

describe('AppComponent', () => {

  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el:DebugElement,
      tabPanel:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, PowerFaInputComponent, PowerMdInputComponent, PowerTabComponent, PowerTabPanelComponent
      ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel=el.query(By.css('#tab-panel'));
    //console.log(tabPanel);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should only find one tab inside the tab container',async(()=> {
      const tabs = tabPanel.queryAll(By.css('.tab'));
      expect(tabs).toBeTruthy();
      expect(tabs.length).toBe(1);
  }));

  it('should find the Login tab button marked as active',async(()=>{
      const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
      expect(selectedButton).toBeTruthy();
      expect(selectedButton.textContent).toBe('Login');
  }));

  it('should display Login tab', async(()=>{
    const loginEmail = tabPanel.query(By.css('.email-field'));
    expect(loginEmail).toBeTruthy();
  }));

  it('should switch to the Contact tab',async(()=>{
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    console.log(tabButtons[2]);
    tabButtons[2].nativeElement.click();
    fixture.detectChanges();
    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe('Contact');
  }));
});
