import { Breakpoints } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { LayoutService } from "@ziphr-task/core/layout";
import { providerOf } from "@ziphr-task/core/testing";

import { HeaderModule } from "./components/header/header.module";
import { LogoModule } from "./components/logo/logo.module";
import { MenuModule } from "./components/menu/menu.module";
import { SidebarModule } from "./components/sidebar/sidebar.module";
import { LayoutComponent } from './layout.component';
import { LayoutComponentPo } from "./layout.component.po";

describe('LayoutComponent', () => {
  let pageObject: LayoutComponentPo;
  let fixture: ComponentFixture<LayoutComponent>;
  let layoutServiceMock: LayoutService;
  let layoutType$: BehaviorSubject<string>;

  beforeEach(() => {
    layoutServiceMock = mock(LayoutService);

    layoutType$ = new BehaviorSubject<string>(Breakpoints.Handset);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          MockModule(HeaderModule),
          MockModule(SidebarModule),
          MockModule(LogoModule),
          MockModule(MenuModule),
        ],
        declarations: [LayoutComponent],
        providers: [providerOf(LayoutService, layoutServiceMock)]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(layoutServiceMock.layoutType$).thenReturn(layoutType$);

    fixture = TestBed.createComponent(LayoutComponent);
    pageObject = new LayoutComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show handset-tablet', () => {
    fixture.detectChanges();

    expect(pageObject.tabletHandset).toBeTruthy();
    expect(pageObject.web).toBeFalsy();
  });

  it('should show web', () => {
    layoutType$.next(Breakpoints.Web);
    fixture.detectChanges();

    expect(pageObject.tabletHandset).toBeFalsy();
    expect(pageObject.web).toBeTruthy();
  });
});
