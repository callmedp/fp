import { TestBed } from '@angular/core/testing';

import { DeliverQuesService } from './deliver-ques.service';

describe('DeliverQuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliverQuesService = TestBed.get(DeliverQuesService);
    expect(service).toBeTruthy();
  });
});
