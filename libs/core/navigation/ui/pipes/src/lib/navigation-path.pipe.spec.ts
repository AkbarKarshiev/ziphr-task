import { NavigationPathPipe } from './navigation-path.pipe';
import { TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NAVIGATION_PATHS, PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationService } from "@ziphr-task/core/navigation/service";

describe('NavigationPathPipe', () => {
  let pipe: NavigationPathPipe;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [PATHS_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    pipe = new NavigationPathPipe(TestBed.inject(NavigationService));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return path', () => {
    expect(pipe.transform(NAVIGATION_PATHS.dashboard)).toEqual('/' + NAVIGATION_PATHS.dashboard);
  });
});
