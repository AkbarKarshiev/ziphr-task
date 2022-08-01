import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotosListComponent } from './card-photos-list.component';

describe('CardPhotosListComponent', () => {
  let component: CardPhotosListComponent;
  let fixture: ComponentFixture<CardPhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPhotosListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
