import { TestBed } from '@angular/core/testing';

import { SendanswersService } from './sendanswers.service';

describe('SendanswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendanswersService = TestBed.get(SendanswersService);
    expect(service).toBeTruthy();
  });
});
