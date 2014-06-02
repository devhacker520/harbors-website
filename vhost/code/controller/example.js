var Router = require("../server");

var fs = require('fs');
var markdown = require( "markdown" ).markdown;

Router.addRoute('/example', function(req, res){
    var md = fs.readFileSync('./vhost/code/public/docs/example/index.md').toString();
    res.render('./html/example/index.jade', {
        title: "HARBORS - 示例 - 轻量级WEB服务器",
        path: "example",
        markdown: markdown.toHTML(md)
    });
});