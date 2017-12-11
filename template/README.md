# <%= name %>

> <%= description %>

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save <%= name %>
```

or if you use [yarn](https://yarnpkg.com).

```sh
$ yarn add <%= name %>
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import <%= name %> from '<%= name %>'

// using CommonJS modules
var <%= name %> = require('<%= name %>')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="//unpkg.com/<%= name %>/dist/<%= name %>.umd.js"></script>
```

This exposes the `<%= name %>()` function as a global.

* * *

## Usage

```js
import <%= name %> from '<%= name %>';

// TODO: usage here
```

## Examples & Demos

[**Real Example on JSFiddle**](https://jsfiddle.net/fireyy/xxxxxxxx/) ➡️

## API

<%= name %>'s API is organized as follows:

### `<%= name %>(options: Object)`

<%= name %> will account for the following properties in options:

  * `param` ....
