import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPhotosListComponent } from './vertical-photos-list.component';

describe('VerticalPhotosListComponent', () => {
  let component: VerticalPhotosListComponent;
  let fixture: ComponentFixture<VerticalPhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalPhotosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
