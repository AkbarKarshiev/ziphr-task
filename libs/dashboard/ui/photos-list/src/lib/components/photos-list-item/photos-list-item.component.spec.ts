import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListItemComponent } from './photos-list-item.component';

describe('PhotosListItemComponent', () => {
  let component: PhotosListItemComponent;
  let fixture: ComponentFixture<PhotosListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
