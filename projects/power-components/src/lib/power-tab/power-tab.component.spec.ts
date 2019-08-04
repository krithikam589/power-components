import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerTabComponent } from './power-tab.component';

describe('PowerTabComponent', () => {
  let component: PowerTabComponent;
  let fixture: ComponentFixture<PowerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
