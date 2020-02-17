import { TestBed } from '@angular/core/testing';

import { SimulationTableService } from './simulation-table.service';

describe('SimulationTableService', () => {
  let service: SimulationTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
