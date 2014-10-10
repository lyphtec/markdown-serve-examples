# express-handlebars view engine sample

Samples using the [express-handlebars](https://github.com/ericf/express-handlebars) view engine.

As handlebars doesn't support calling methods on the view model in the view, `markdownFile.parseContent()` will not work.
Therefore, we can use the `preParse` option to have the HTML content pre-parsed and available at the `markdownFile.parsedContent` property.
