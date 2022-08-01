import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPostsListItemComponent } from './vertical-posts-list-item.component';

describe('VerticalPostsListItemComponent', () => {
  let component: VerticalPostsListItemComponent;
  let fixture: ComponentFixture<VerticalPostsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalPostsListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalPostsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
