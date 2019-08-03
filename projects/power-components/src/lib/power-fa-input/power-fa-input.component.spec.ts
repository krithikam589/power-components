import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFaInputComponent } from './power-fa-input.component';

describe('PowerFaInputComponent', () => {
  let component: PowerFaInputComponent;
  let fixture: ComponentFixture<PowerFaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
