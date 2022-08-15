import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { MockModule } from "ng-mocks";
import { mock, verify } from "ts-mockito";

import { providerOf } from "@ziphr-task/core/testing";

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidenavComponent } from './sidenav.component';
import { SidenavComponentPo } from "./sidenav.component.po";

describe('SidenavComponent', () => {
  let pageObject: SidenavComponentPo;
  let fixture: ComponentFixture<SidenavComponent>;
  let ngbActiveOffcanvasMock: NgbActiveOffcanvas;

  beforeEach(() => {
    ngbActiveOffcanvasMock = mock(NgbActiveOffcanvas);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(LogoModule),
        MockModule(MenuModule)
      ],
      providers: [providerOf(NgbActiveOffcanvas, ngbActiveOffcanvasMock)],
      declarations: [SidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    pageObject = new SidenavComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.logo).toBeTruthy();
    expect(pageObject.dismiss).toBeTruthy();
    expect(pageObject.menu).toBeTruthy();
  });

  it('should call dismiss', () => {
    pageObject.triggerDismiss();
    fixture.detectChanges();

    verify(ngbActiveOffcanvasMock.dismiss('Cross click')).once();
  });
});
