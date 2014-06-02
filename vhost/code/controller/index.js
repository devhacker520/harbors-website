var Router = require("../server");

Router.addRoute('/', function(req, res){
    res.render('./html/index/index.jade', {
        title: "HARBORS - 轻量级WEB服务器",
        path: "index"
    });
});