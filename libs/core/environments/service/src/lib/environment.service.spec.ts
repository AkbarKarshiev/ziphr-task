import { TestBed } from '@angular/core/testing';

import { ENVIRONMENTS_DEFAULT } from "@ziphr-task/core/environments/service";

import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return environments', () => {
    expect(service.environments).toEqual({ ...ENVIRONMENTS_DEFAULT })
  });
});
