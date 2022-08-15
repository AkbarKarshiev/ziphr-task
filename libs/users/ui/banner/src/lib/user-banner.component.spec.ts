import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { of, ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { RootStateFacade } from "@ziphr-task/core/store/root";
import { providerOf } from "@ziphr-task/core/testing";
import { UsersApiService } from "@ziphr-task/users/api";
import { User, USER_STUB } from "@ziphr-task/users/common";

import { UserBannerComponent } from './user-banner.component';
import { UserBannerComponentPo } from "./user-banner.component.po";

describe('UserBannerComponent', () => {
  let pageObject: UserBannerComponentPo;
  let rootFacadeMock: RootStateFacade;
  let usersApiServiceMock: UsersApiService;
  let fixture: ComponentFixture<UserBannerComponent>;
  let user$: ReplaySubject<User>;

  const ID = '1';

  beforeEach(() => {
    rootFacadeMock = mock(RootStateFacade);
    usersApiServiceMock = mock(UsersApiService);

    user$ = new ReplaySubject<User>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      providers: [
        providerOf(RootStateFacade, rootFacadeMock),
        providerOf(UsersApiService, usersApiServiceMock)
      ],
      declarations: [UserBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    when(rootFacadeMock.routeParams$).thenReturn(of({ id: ID }));
    when(usersApiServiceMock.loadOneUser(ID)).thenReturn(user$);

    fixture = TestBed.createComponent(UserBannerComponent);
    pageObject = new UserBannerComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    user$.next(USER_STUB);
    fixture.detectChanges();

    expect(pageObject.name).toBeTruthy();
    expect(pageObject.details).toBeTruthy();
  });
});
