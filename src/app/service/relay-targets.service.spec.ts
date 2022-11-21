import { TestBed } from '@angular/core/testing';

import { RelayTargetsService } from './relay-targets.service';

describe('RelayTargetsService', () => {
  let service: RelayTargetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelayTargetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
