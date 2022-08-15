import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { MenuComponent } from './menu.component';
import { MenuComponentPo } from "./menu.component.po";

describe('MenuComponent', () => {
  let pageObject: MenuComponentPo;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(NavigationPipesModule)
      ],
      declarations: [MenuComponent],
      providers: [PATHS_STUB]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    pageObject = new MenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.navLinks.length).toBe(4);
  });
});
