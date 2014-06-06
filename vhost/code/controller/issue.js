var Router = require("../server");

var fs = require("fs");

Router.addRoute('/issue', function(req, res){

    var message = req.getGetParam("message");

    fs.appendFile("./vhost/code/SubmitBug.log", new Date().toString().substr(0, 25) + message + "\n");

    var data = {status: 0, message: "谢谢您的反馈，我们将尽快修复您的问题。"};

    data = req.getGetParam("callback") + "(" + JSON.stringify(data) + ")";

    res.end(data);
});