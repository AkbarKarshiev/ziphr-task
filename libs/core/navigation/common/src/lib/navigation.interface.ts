import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  dashboard: string;
  posts: string;
  post: string;
  albums: string;
  album: string;
  photos: string;
  photo: string;
  user: string;

  // Errors
  serverError: string;
  notFound: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  dashboard: 'dashboard',
  posts: 'posts',
  post: ':id',
  albums: 'albums',
  album: 'albums/:id',
  photos: 'photos',
  photo: 'photos/:id',
  user: 'users/:id',

  serverError: 'server-error',
  notFound: 'not-found',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, string>;
  routerLinkActiveOptions?: { exact: boolean };
}

export const PATHS = new InjectionToken<Record<string, string>>('NAVIGATION_PATHS');
