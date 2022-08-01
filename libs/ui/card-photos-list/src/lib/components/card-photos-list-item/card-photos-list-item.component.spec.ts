import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotosListItemComponent } from './card-photos-list-item.component';

describe('CardPhotosListItemComponent', () => {
  let component: CardPhotosListItemComponent;
  let fixture: ComponentFixture<CardPhotosListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPhotosListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPhotosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
