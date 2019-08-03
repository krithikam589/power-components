import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerMdInputComponent } from './power-md-input.component';

describe('PowerMdInputComponent', () => {
  let component: PowerMdInputComponent;
  let fixture: ComponentFixture<PowerMdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerMdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerMdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
