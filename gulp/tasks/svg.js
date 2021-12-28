import svgmin from "gulp-svgmin";

export const svg = () => {
    return app.gulp.src(app.path.src.svgicons)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(
            app.plugins.if (
                app.isBuild,
                svgmin()
            )
        )
        .pipe(app.gulp.dest(app.path.build.svgicons))
        .pipe(app.plugins.browserSync.stream());
};