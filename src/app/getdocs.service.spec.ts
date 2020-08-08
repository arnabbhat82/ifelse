import { TestBed } from '@angular/core/testing';

import { GetdocsService } from './getdocs.service';

describe('GetdocsService', () => {
  let service: GetdocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
