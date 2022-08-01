import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAlbumsListItemComponent } from './vertical-albums-list-item.component';

describe('VerticalAlbumsListItemComponent', () => {
  let component: VerticalAlbumsListItemComponent;
  let fixture: ComponentFixture<VerticalAlbumsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalAlbumsListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalAlbumsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
