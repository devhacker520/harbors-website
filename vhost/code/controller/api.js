var Router = require("../server");

var fs = require("fs");
var markdown = require( "markdown" ).markdown;

Router.addRoute('/api', function(req, res){
    var md = fs.readFileSync('./vhost/code/public/docs/api/index.md').toString();
    res.render('./html/api/index.jade', {
        title: "HARBORS - API列表 - 轻量级WEB服务器",
        path: "api",
        markdown: markdown.toHTML(md)
    });
});

/*
Router.addRoute('/api/*', function(req, res){
    var route = req.url.split("?")[0].split("/");
    res.render('./html/api/index.jade', {
        title: "HARBORS - API列表 - 轻量级WEB服务器",
        path: "api"
    });
});
*/

var dirList = {
    "core": [
        "class",
        "debugger",
        "request",
        "response",
        "server",
        "vhost"
    ],
    "route": [
        "router",
        "autorouter"
    ],
    "process": [
        "cluster",
        "sync"
    ],
    "extension": [
        "config",
        "session"
    ],
    "tools": [
        "directory",
        "string"
    ]
};

for(var p in dirList){
    (function(p){
        Router.addRoute('/api/' + p, function(req, res){
            var md = fs.readFileSync('./vhost/code/public/docs/api/' + p + '/index.md').toString();
            res.render('./html/api/index.jade', {
                title: "HARBORS - " + p + " - 轻量级WEB服务器",
                path: "api",
                markdown: markdown.toHTML(md)
            });
        });

        dirList[p].forEach(function(api){

            Router.addRoute('/api/' + p + '/' + api, function(req, res){
                var md = fs.readFileSync('./vhost/code/public/docs/api/' + p + '/' + api + '.md').toString();
                res.render('./html/api/index.jade', {
                    title: "HARBORS - " + api + " - 轻量级WEB服务器",
                    path: "api",
                    markdown: markdown.toHTML(md)
                });
            });
        });
    })(p);
}
