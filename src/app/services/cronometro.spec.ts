import { TestBed } from '@angular/core/testing';

import { CronometroService } from './cronometro.service';

describe('Cronometro', () => {
  let service: CronometroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronometroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});