import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerModalComponent } from './power-modal.component';

describe('PowerModalComponent', () => {
  let component: PowerModalComponent;
  let fixture: ComponentFixture<PowerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
