export const fonts = () => {
    return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts));
};