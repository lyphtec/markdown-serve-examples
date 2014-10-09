# hbs view engine sample

Samples using the [hbs](https://github.com/donpark/hbs) view engine.

As hbs doesn't support calling methods on the view model in the view, `markdownFile.parseContent()` will not work.

We can either set the `preParse` option to true in the middleware to have the parsed HTML content available as `markdownFile.parsedContent`.
This can be seen the the `app.js` sample.

The `preParseFn.js` sample shows using preParse cas a custom function.  We must return an object from the function.  This gives us the
flexibility to re-map any of the properties of `markdownFile`.
