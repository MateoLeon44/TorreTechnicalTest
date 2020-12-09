import { TestBed } from '@angular/core/testing';

import { ServiceFacadeService } from './service-facade.service';

describe('ServiceFacadeService', () => {
  let service: ServiceFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
