/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnsavedChangesGuardService } from './unsaved-changes-guard.service';

describe('Service: UnsavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedChangesGuardService]
    });
  });

  it('should ...', inject([UnsavedChangesGuardService], (service: UnsavedChangesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
