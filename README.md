# gulp-highlight-code

[![npm](https://img.shields.io/npm/v/gulp-highlight-code.svg)]()
[![npm](https://img.shields.io/npm/l/gulp-highlight-code.svg)]()

[Check it out on npm!](https://www.npmjs.com/package/gulp-highlight-code "gulp-highlight-code")

## About
Pipe code snippets through `highlight.js` using `gulp` to pre-tag code blocks at compile time. This only applies to codeblocks formatted properly using both the `pre` and a `code` tags (i.e. `<pre><code>`).

gulp-highlight-code will try to automatically detect a codeblock's language. To improve the accuracy of gulp-highlight-code, add the `data-lang` HTML attribute to the `code` tag containing code block to specify the language.

## Install

```bash
npm install gulp-highlight-code --save-dev
```

## Usage

### gulpfile.js
```js
var gulp = require('gulp');
var highlight = require('gulp-highlight-code');

gulp.task('default', function () {
	gulp.src('src/index.html')
		.pipe(highlight())
		.pipe(gulp.dest('dist'));
});
```

### src/index.html
```html
<!-- Will be highlighted -->
<pre><code data-lang="html">&lt;div&gt;
	&lt;Highlighted&gt;
&lt;div&gt;</code></pre>

<!-- Will not be highlighted -->
<pre><code data-lang="html" class="no-highlight">&lt;div&gt;
	&lt;Not Highlighted&gt;
&lt;div&gt;</code></pre>

```

Note that you must use escaped HTML within the `<pre><code>` block.