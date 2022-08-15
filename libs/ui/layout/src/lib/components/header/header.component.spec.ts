import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { MockModule } from "ng-mocks";
import { mock, verify } from "ts-mockito";

import { providerOf } from "@ziphr-task/core/testing";

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { SidenavModule } from "../sidenav/sidenav.module";
import { HeaderComponent } from './header.component';
import { HeaderComponentPo } from "./header.component.po";

describe('HeaderComponent', () => {
  let pageObject: HeaderComponentPo;
  let fixture: ComponentFixture<HeaderComponent>;
  let ngbOffcanvasMock: NgbOffcanvas;

  beforeEach(() => {
    ngbOffcanvasMock = mock(NgbOffcanvas);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(LogoModule),
        MockModule(MenuModule),
        MockModule(SidenavModule),
      ],
      providers: [providerOf(NgbOffcanvas, ngbOffcanvasMock)],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    pageObject = new HeaderComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.logo).toBeTruthy();
    expect(pageObject.menu).toBeTruthy();
  });

  it('should call toggler', () => {
    pageObject.triggerOffcanvasToggler();
    fixture.detectChanges();

    verify(ngbOffcanvasMock.open(SidenavComponent)).once();
  });
});
