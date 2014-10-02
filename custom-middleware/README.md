# Custom middleware sample

This sample shows how to use markdown-serve as a custom middleware.

This middleware is defined in the `./routes/markdown.js` file.  To setup the app to use this middleware, we specify a catch-all get:

```js
app.get('*', markdown.handler);
```

Within the custom middleware, we can do some checks on markdown file metadata - specified in the file's YAML front-matter before we render
the view.  In this case, we bypass all files that do not have front-matter, or have draft flag set to true. The file that matches this
criteria is `common/data/draft.md`, so access to `http://localhost:3000/draft` will result in a 404.

Note that we don't specify the 404 response anywhere in our custom middleware - this is handled by Express automatically. It is recommended to just pass the request along to the next
middleware by calling `next()`.  This allows for chaining of potentially other middleware(s) lower down.
