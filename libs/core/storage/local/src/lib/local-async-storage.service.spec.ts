import { TestBed } from '@angular/core/testing';

import { LocalSyncStorageService, LocalAsyncStorageService } from "@ziphr-task/core/storage/local";

describe('LocalAsyncStorageService', () => {
  let service: LocalAsyncStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LocalAsyncStorageService, LocalSyncStorageService],
    }).compileComponents();

    service = TestBed.inject(LocalAsyncStorageService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
