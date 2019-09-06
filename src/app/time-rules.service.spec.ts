import { TestBed } from '@angular/core/testing';

import { TimeRulesService } from './time-rules.service';

describe('TimeRulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeRulesService = TestBed.get(TimeRulesService);
    expect(service).toBeTruthy();
  });
});
