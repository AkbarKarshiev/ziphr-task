import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { AlbumsServicesModule } from "@ziphr-task/albums/services";
import { AlbumsTableModule } from "@ziphr-task/albums/ui/albums-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumsPageComponent } from './albums-page.component';
import { AlbumsPageComponentPo } from "./albums-page.component.po";

describe('AlbumsPageComponent', () => {
  let pageObject: AlbumsPageComponentPo;
  let fixture: ComponentFixture<AlbumsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(BreadcrumbModule),
        MockModule(AlbumsTableModule),
        MockModule(AlbumsServicesModule)
      ],
      declarations: [AlbumsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPageComponent);
    pageObject = new AlbumsPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.breadcrumb).toBeTruthy();
    expect(pageObject.table).toBeTruthy();
  });
});
