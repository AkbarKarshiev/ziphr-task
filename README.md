# ZiphrTask

A simple dashboard built with Angular 14, Nx workspace, ngrx, Bootstrap 5 and ng-bootstrap.

## Working application

Check out the **live application** -> https://www.google.com/

## Tech stack

![Tech logos][stack]

- [Angular 14][angular]
- [Nx Workspace][nx]
- [ngrx][ngrx] and
- [ng-bootstrap][ng-bootstrap] UI component: `offcanvas`, `pagination`, `breadcrumb`, `select` and more.
- [Bootsrap 5][bootsrap] - For basic components styles and utilities
- [Netlify][netlify] for deployment
- [Yarn][yarn] package manager is used

[angular]: https://angular.io/
[ngrx]: https://ngrx.io/
[bootsrap]: https://getbootstrap.com/
[ng-bootstrap]: https://ng-bootstrap.github.io/
[netlify]: http://netlify.com/
[yarn]: https://yarnpkg.com/

## High-level design

All components are following:

- OnPush Change Detection and async pipes: all components use observable and async pipe for rendering data without any single manual subscribe. Only some places are calling subscribe for reacting to route params and form value changes.
- SCAMs (single component Angular modules) for tree-shakable components, meaning each component will have a respective module. For example, a LogoComponent will have a corresponding LogoModule.
- Mostly, everything stay in the `libs` folder. Modules, Configurations, Components etc... are in libs. libs should be separated into different directories based on features. We won't put them inside the apps folder. For example in an Angular, contains the `main.ts`, `app.component.ts` and `app.module.ts`

## Development server

Run `yarn run start` for a dev server. Navigate to http://localhost:4545/. The app will automatically reload if you change any of the source files.

## Build

Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Dependency Graph

Run `nx graph` to see a diagram of the dependencies of projects.

