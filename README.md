# upbin

[![npm](https://img.shields.io/npm/v/upbin.svg)](https://www.npmjs.com/package/upbin)
[![license](https://img.shields.io/github/license/Leko/upbin.svg)](https://opensource.org/licenses/MIT)
[![Lint and Test](https://github.com/Leko/upbin/workflows/Lint%20and%20Test/badge.svg)](https://github.com/Leko/upbin/actions)
[![codecov](https://codecov.io/gh/Leko/upbin/branch/master/graph/badge.svg)](https://codecov.io/gh/Leko/upbin) [![Greenkeeper badge](https://badges.greenkeeper.io/Leko/upbin.svg)](https://greenkeeper.io/)

CLI helper to find and execute an executable file by walking up parent directories.

## Why?

`upbin` mainly focuses on module hoisting.  
For example, [Yarn workspaces](https://yarnpkg.com/en/docs/workspaces) and [Lerna](https://github.com/lerna/lerna) supports module hoisting.  
module will hoist to top-level node_modules when it's using the same version of [Babel](https://github.com/babel/babel).

```
./
  node_modules/
    .bin/
      babel <- It can execute by upbin
  packages/
    some-pkg/ <- Current working directory
```

If you want to execute top-level bin in `packages/some-pkg/package.json`:

```js
{
  "scripts": {
    "prepare": "../../node_modules/.bin/babel ..."
  }
}
```

It can be replaced with upbin!

```
    "prepare": "upbin babel ..."
```

## Install

```
npm i upbin
```

upbin requires Node.js >= 8

## Usage

```
upbin [binName] [args...]
```

## License

This package is released under the [MIT](https://opensource.org/licenses/MIT) license.
