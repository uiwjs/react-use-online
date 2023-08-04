React useOnline Hook
===

[![Build & Deploy](https://github.com/uiwjs/react-use-online/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-use-online/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-use-online/badges.svg)](https://uiwjs.github.io/react-use-online/coverage/lcov-report/)
[![NPM Version](https://img.shields.io/npm/v/@uiw/react-use-online.svg)](https://www.npmjs.com/package/@uiw/react-use-online)

`useOnline` is a tiny, zero-dependency, SSR hook for responding to online/offline changes.

## Quick Start

```bash
npm install @uiw/react-use-online
```

## Using

You can use the Chrome Browser Debug Tool(**f11**) to set up **offLine** and **onLine** test hooks.

```jsx mdx:preview
import React from "react";
import { useOnline } from '@uiw/react-use-online';

export default function App() {
  const isOnline = useOnline();
  return (
    <div>
      <h1 style={{ margin: 0 }}>useOnline</h1>
      <div>{isOnline ? '✅ You are online' : '❌ You are offline'}</div>
    </div>
  );
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-use-online/graphs/contributors">
  <img src="https://uiwjs.github.io/react-use-online/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.