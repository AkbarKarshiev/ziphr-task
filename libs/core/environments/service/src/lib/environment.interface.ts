import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
  appHost: string;
  api: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('ENVIRONMENTS');

export const ENVIRONMENTS_DEFAULT: Environments = {
  production: false,
  brand: 'My App',
  appHost: 'http://localhost',
  api: 'https://jsonplaceholder.typicode.com'
};
