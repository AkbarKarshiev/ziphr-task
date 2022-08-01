import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPostsListComponent } from './vertical-posts-list.component';

describe('VerticalPostsListComponent', () => {
  let component: VerticalPostsListComponent;
  let fixture: ComponentFixture<VerticalPostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalPostsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
