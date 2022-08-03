import { TestBed } from '@angular/core/testing';

import { AlbumsApiService } from './albums-api.service';

describe('AlbumsApiService', () => {
  let service: AlbumsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
