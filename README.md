# aurelia-ej2-bridge

[![npm Version](https://img.shields.io/npm/v/0.0.1)](https://www.npmjs.com/package/@aurelia-ej2-bridge/base)

## Documentation

## Building

**Before The First Build**

`npm ci`: installs dependencies for the base Aurelia UX project
`npm run bootstrap`: sets up a symlink between all of the packages in the monorepo
`npm run build`: builds all of the mono repo projects.

>Note: `npm run build` is very CPU intensive and takes a small period of time on most machines. If you are working within a single component, you might try `npm run build` instead at the component package level.

## Tests

### From the project's root directory

`npm run test -- --package=name` runs the tests for the specified package (defaults to `-- --package=core` when omitted)

If you have `lerna` installed globally:

`lerna run test` runs the tests for all packages (will start multiple chrome instances simultaneously)

### From a package's own directory

`npm run test` runs the tests for that package

## Developing

### Build from a package's own directory

1. Production build:
```shell
npm run build
```
2. Dev build:
```shell
npm run build:dev
# or for watch
npm run build:dev:watch
```

If you want to build to a specific, non default, folder, do:
```shell
npm run build -- --environment target_dir: path/to/my/dir
# or
npm run build:dev -- --environment target_dir: path/to/my/dir
# or
npm run build:dev:watch -- --environment target_dir: path/to/my/dir
```

### Run a test app which emulates dependencies installation
To run the test app, first make sure you built all the packages via the instruction of how to build above. Then open a shell at root of this project and copy paste the following:
```shell
cd app
npm ci
npm run dev
```

### Run a test app with direct source bundling

To run the test app, with all dependencies pointing to the packages source code, first make sure you could run in previous step, then do:
1. Uncomment line XX to line ZZ in webpack.config.js in `app` folder
2. Open a shell at root of this project and run:

```shell
cd app
npm ci
npm run dev
```

This will use `webpack-dev-server` and `webpack` to alias all `ux` dependencies to the source in `pakcages` folder.

### Testing from the project's root directory

`npm run develop -- --package=name` runs the tests for the specified package in `watch` mode  (defaults to `-- --package=core` when omitted)

### Testing from a package's own directory

`npm run develop` runs the tests for that package in `watch` mode


