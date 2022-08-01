import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPhotosListItemComponent } from './vertical-photos-list-item.component';

describe('VerticalPhotosListItemComponent', () => {
  let component: VerticalPhotosListItemComponent;
  let fixture: ComponentFixture<VerticalPhotosListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalPhotosListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalPhotosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
