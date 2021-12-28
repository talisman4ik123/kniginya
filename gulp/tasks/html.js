import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import minHtml from "gulp-htmlmin";

export const html = () => {
    return app.gulp.src(app.path.src.html)

        .pipe (app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'images/'))
        .pipe(app.plugins.replace(/@icon\//g, 'svgicons/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe (
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe (
            app.plugins.if (
                app.isBuild,
                minHtml ({
                    collapseWhitespace: true,
                    removeComments: true
                })
            )
        )
        .pipe(app.gulp.dest(app.path.buildFolder))
        .pipe(app.plugins.browserSync.stream());
};