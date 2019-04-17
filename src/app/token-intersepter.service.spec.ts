import { TestBed } from '@angular/core/testing';

import { TokenIntersepterService } from './token-intersepter.service';

describe('TokenIntersepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenIntersepterService = TestBed.get(TokenIntersepterService);
    expect(service).toBeTruthy();
  });
});
