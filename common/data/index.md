title: Sample file title
published: 2014-04-08 15:33:00
---

## Hi there!

Some random points:

1. This stuff is cool.
1. It's the most awesome
1. Did I say awesome?

![Some random image!](http://lorempixel.com/400/300)

```js
var markdownServe = require('markdown-serve');

var server = new markdownServe.MarkdownServer( path.resolve(__dirname, 'docs') );

server.get('/awesome-file', function(err, result) {
    if (err)
        console.log(err);

    console.log(result);
});
```

---

*Seeya*
