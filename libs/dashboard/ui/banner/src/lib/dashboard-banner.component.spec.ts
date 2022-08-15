import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, when } from "ts-mockito";

import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { providerOf } from "@ziphr-task/core/testing";

import { DashboardBannerComponent } from './dashboard-banner.component';
import { DashboardBannerComponentPo } from "./dashboard-banner.component.po";

describe('DashboardBannerComponent', () => {
  let pageObject: DashboardBannerComponentPo;
  let fixture: ComponentFixture<DashboardBannerComponent>;
  let environmentServiceMock: EnvironmentService;
  const BRAND_STUB = 'My app';

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [providerOf(EnvironmentService, environmentServiceMock)],
      declarations: [DashboardBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn({ brand: BRAND_STUB } as any);

    fixture = TestBed.createComponent(DashboardBannerComponent);
    pageObject = new DashboardBannerComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.brandText).toBe(BRAND_STUB);
  });
});
