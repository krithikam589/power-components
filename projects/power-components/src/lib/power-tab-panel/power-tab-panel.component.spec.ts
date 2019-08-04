import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerTabPanelComponent } from './power-tab-panel.component';

describe('PowerTabPanelComponent', () => {
  let component: PowerTabPanelComponent;
  let fixture: ComponentFixture<PowerTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
