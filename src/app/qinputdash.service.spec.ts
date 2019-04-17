import { TestBed } from '@angular/core/testing';

import { QinputdashService } from './qinputdash.service';

describe('QinputdashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QinputdashService = TestBed.get(QinputdashService);
    expect(service).toBeTruthy();
  });
});
