import { TestBed } from '@angular/core/testing';

import { PowerModalService } from './power-modal.service';

describe('PowerModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerModalService = TestBed.get(PowerModalService);
    expect(service).toBeTruthy();
  });
});
