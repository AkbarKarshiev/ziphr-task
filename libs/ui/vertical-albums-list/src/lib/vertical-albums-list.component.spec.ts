import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAlbumsListComponent } from './vertical-albums-list.component';

describe('VerticalAlbumsListComponent', () => {
  let component: VerticalAlbumsListComponent;
  let fixture: ComponentFixture<VerticalAlbumsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalAlbumsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalAlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
