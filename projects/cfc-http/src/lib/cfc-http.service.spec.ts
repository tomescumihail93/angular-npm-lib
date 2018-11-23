import { TestBed } from '@angular/core/testing';

import { CfcHttpService } from './cfc-http.service';

describe('CfcHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfcHttpService = TestBed.get(CfcHttpService);
    expect(service).toBeTruthy();
  });
});
