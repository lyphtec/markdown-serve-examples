# hbs view engine sample

This sample is basically the simple-middleware sample but uses the [hbs](https://github.com/donpark/hbs) view engine instead.

As hbs doesn't support calling methods on the view model in the view, `markdownFile.parseContent()` will not work.  Thus, we set the
`preParse` option to true in the middleware to have the parsed HTML content available as `markdownFile.parsedContent`.  This property can
then be used directly in the view.
