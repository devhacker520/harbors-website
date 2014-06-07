var Router = require("../server");

var cp = require("child_process");
var fs = require("fs");
var path = require("path");

Router.addRoute('/pull', function(req, res){
    res.writeHeader(404);
    res.end('The page you\'re looking for and does not seem to exist.');
    cp.exec("cd " + path.join(__dirname, "../../../../tools") + " && git pull", function(a, b, c){
        fs.appendFile("./vhost/tools/Git.log", new Date().toString().substr(0, 25) + c + "\n");
    });

});