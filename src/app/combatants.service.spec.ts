import { TestBed } from '@angular/core/testing';

import { CombatantsService } from './combatants.service';

describe('CombatantsService', () => {
  let service: CombatantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
