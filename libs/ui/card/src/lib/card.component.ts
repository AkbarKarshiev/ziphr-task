import { ChangeDetectionStrategy, Component, ContentChildren, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
