import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosTableComponent } from './album-photos-table.component';

describe('AlbumPhotosTableComponent', () => {
  let component: AlbumPhotosTableComponent;
  let fixture: ComponentFixture<AlbumPhotosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumPhotosTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
