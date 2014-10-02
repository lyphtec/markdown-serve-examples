var server = require('markdown-serve'),
    path = require('path');

exports.handler = function(req, res, next) {
    if (req.method !== 'GET') next();

    var rootDir = path.resolve(__dirname, '../../common/data');

    var markdownServer = new server.MarkdownServer(rootDir); 

    markdownServer.get(req.path, function(err, result) {
        if (err) {
            console.log(err);
            next();
            return;
        }

        // we don't want to pass _file down to view
        delete result._file;

        if (result.meta && !result.meta.draft) {
            var view = result.meta.view || 'markdown';

            res.render(view, { markdownFile: result });
        } else {
            // optionally, allow authenticated admins access to draft docs, eg.
            //
            // if (result.meta && req.isAuthenticated && req.user.isAdmin)
            //    res.render('draft-view', { markdownFile: result });

            next();
        }
    });

}
