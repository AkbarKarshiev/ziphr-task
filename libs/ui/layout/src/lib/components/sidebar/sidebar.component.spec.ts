import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidebarComponent } from './sidebar.component';
import { SidebarComponentPo } from "./sidebar.component.po";

describe('SidebarComponent', () => {
  let pageObject: SidebarComponentPo;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(LogoModule),
        MockModule(MenuModule)
      ],
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    pageObject = new SidebarComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.logo).toBeTruthy();
    expect(pageObject.menu).toBeTruthy();
  });
});
