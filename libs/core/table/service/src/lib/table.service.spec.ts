import { TestBed } from '@angular/core/testing';

import { TableResponseModel } from "@ziphr-task/core/table/common";

import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService<TableResponseModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
