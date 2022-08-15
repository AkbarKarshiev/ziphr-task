import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { mock, when } from "ts-mockito";

import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { providerOf } from "@ziphr-task/core/testing";

import { LogoComponent } from './logo.component';
import { LogoComponentPo } from "./logo.component.po";

describe('LogoComponent', () => {
  let pageObject: LogoComponentPo;
  let fixture: ComponentFixture<LogoComponent>;
  let environmentServiceMock: EnvironmentService;
  const BRAND_STUB = 'My app';

  beforeEach(() => {
    environmentServiceMock = mock(EnvironmentService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(NavigationPipesModule)],
      declarations: [LogoComponent],
      providers: [PATHS_STUB, providerOf(EnvironmentService, environmentServiceMock)]
    }).compileComponents();
  });

  beforeEach(() => {
    when(environmentServiceMock.environments).thenReturn({ brand: BRAND_STUB } as any);

    fixture = TestBed.createComponent(LogoComponent);
    pageObject = new LogoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.link).toBeTruthy();
    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.brandText).toBe(BRAND_STUB);
  });
});
