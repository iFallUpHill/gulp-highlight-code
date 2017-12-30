# gulp-highlight-code

[![npm](https://img.shields.io/npm/v/gulp-highlight-code.svg)]()
[![npm](https://img.shields.io/npm/l/gulp-highlight-code.svg)]()

[Check it out on npm!](https://www.npmjs.com/package/gulp-highlight-code "gulp-highlight-code")

## Install

```bash
npm install gulp-highlight-code --save-dev
```

## Usage

```js
var gulp = require('gulp');
var highlight = require('gulp-highlight-code');

gulp.task('default', function () {
	gulp.src('src/index.html')
		.pipe(highlight())
		.pipe(gulp.dest('dist'));
});
```