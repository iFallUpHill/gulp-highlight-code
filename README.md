# gulp-highlight-code

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