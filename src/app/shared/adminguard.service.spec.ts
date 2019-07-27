import { TestBed } from '@angular/core/testing';

import { AdminGuardService } from './adminguard.service';

describe('AdminguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminGuardService = TestBed.get(AdminGuardService);
    expect(service).toBeTruthy();
  });
});
