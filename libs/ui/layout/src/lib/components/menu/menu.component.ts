import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { NavigationLink, NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

export function getLinks(paths: NavigationPaths): NavigationLink[] {
  return [
    {
      route: paths.dashboard,
      label: 'dashboard',
    },
    {
      route: paths.posts,
      label: 'posts',
    },
    {
      route: paths.albums,
      label: 'albums',
    },
    {
      route: paths.photos,
      label: 'photos',
    },
  ];
}

@Component({
  selector: 'ziphr-task-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  links!: NavigationLink[];

  constructor(@Inject(PATHS) private readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.links = getLinks(this.paths);
  }

  trackByFn(index: number, link: NavigationLink): string {
    return link.route;
  }
}
