
const gul = require('gulp');
const ts = require('gulp-typescript');

function ts(done) {
    gul.src('./**/*.ts')
        .pipe(ts())
        .pipe(gul.dest('./buil/'))
    done()
}

exports.ts = ts;