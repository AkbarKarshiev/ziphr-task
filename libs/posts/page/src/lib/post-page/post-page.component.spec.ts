import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { of, ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { RootStateFacade } from "@ziphr-task/core/store/root";
import { providerOf } from "@ziphr-task/core/testing";
import { Post, POST_STUB } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PostPageComponent } from './post-page.component';
import { PostPageComponentPo } from "./post-page.component.po";

describe('PostPageComponent', () => {
  let pageObject: PostPageComponentPo;
  let fixture: ComponentFixture<PostPageComponent>;
  let rootFacadeMock: RootStateFacade;
  let postsFacadeMock: PostsFacade;
  let postById$: ReplaySubject<Post>;

  const ID = '1';

  beforeEach(() => {
    postsFacadeMock = mock(PostsFacade);
    rootFacadeMock = mock(RootStateFacade);

    postById$ = new ReplaySubject<Post>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          MockModule(BreadcrumbModule),
        ],
        providers: [
          providerOf(RootStateFacade, rootFacadeMock),
          providerOf(PostsFacade, postsFacadeMock)
        ],
        declarations: [PostPageComponent]
      }).compileComponents();
    })
  )

  beforeEach(() => {
    when(rootFacadeMock.routeParams$).thenReturn(of({ id: ID }));
    when(postsFacadeMock.postById$(ID)).thenReturn(postById$);

    fixture = TestBed.createComponent(PostPageComponent);
    pageObject = new PostPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    postById$.next(POST_STUB);
    fixture.detectChanges();

    expect(pageObject.breadcrumb).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.body).toBeTruthy();
  });
});
