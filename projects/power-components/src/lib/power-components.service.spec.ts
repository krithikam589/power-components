import { TestBed } from '@angular/core/testing';

import { PowerComponentsService } from './power-components.service';

describe('PowerComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerComponentsService = TestBed.get(PowerComponentsService);
    expect(service).toBeTruthy();
  });
});
