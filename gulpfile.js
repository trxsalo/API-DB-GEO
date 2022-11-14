
const {src,dest} = require('gulp');
const ts = require('gulp-typescript');

function tys(done){
    src('./src/**/*.ts')
        .pipe(ts({
            declaration:false
        }))
        .pipe(dest('./build/'))
    done();
}

exports.tys = tys;