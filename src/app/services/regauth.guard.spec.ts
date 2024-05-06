import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { regauthGuard } from './regauth.guard';

describe('regauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => regauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
