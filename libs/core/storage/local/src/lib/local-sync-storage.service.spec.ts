import { TestBed } from '@angular/core/testing';

import { LocalSyncStorageService } from './local-sync-storage.service';

describe('LocalSyncStorageService', () => {
  let service: LocalSyncStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalSyncStorageService],
    }).compileComponents();

    service = TestBed.inject(LocalSyncStorageService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
