import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  PostsCount = 'posts-count',
  AlbumsCount = 'albums-count',
  PhotosCount = 'photos-count',
  PostsList = 'posts-list',
  PhotosList = 'photos-list',
}

export class DashboardPageComponentPo extends PageObject {
  get postsCount(): DebugElement | null {
    return this.getByAutomationId(Automation.PostsCount);
  }

  get albumsCount(): DebugElement | null {
    return this.getByAutomationId(Automation.AlbumsCount);
  }

  get photosCount(): DebugElement | null {
    return this.getByAutomationId(Automation.PhotosCount);
  }

  get postsList(): DebugElement | null {
    return this.getByAutomationId(Automation.PostsList);
  }

  get photosList(): DebugElement | null {
    return this.getByAutomationId(Automation.PhotosList);
  }

  get postsCountText(): string | null {
    return this.text(Automation.PostsCount);
  }

  get albumsCountText(): string | null {
    return this.text(Automation.AlbumsCount);
  }

  get photosCountText(): string | null {
    return this.text(Automation.PhotosCount);
  }
}
