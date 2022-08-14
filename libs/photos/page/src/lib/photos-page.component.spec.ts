import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PhotosServicesModule } from "@ziphr-task/photos/services";
import { PhotosTableModule } from "@ziphr-task/photos/ui/photos-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PhotosPageComponent } from './photos-page.component';
import { PhotosPageComponentPo } from "./photos-page.component.po";

describe('PhotosPageComponent', () => {
  let pageObject: PhotosPageComponentPo;
  let fixture: ComponentFixture<PhotosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(BreadcrumbModule),
        MockModule(PhotosTableModule),
        MockModule(PhotosServicesModule)
      ],
      declarations: [PhotosPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPageComponent);
    pageObject = new PhotosPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.table).toBeTruthy();
    expect(pageObject.breadcrumb).toBeTruthy();
  });
});
