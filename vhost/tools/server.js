var harbors = require("harbors");
var path = require('path');
var fs = require('fs');

harbors.setDebug(4);

var Router = harbors.AutoRouter.create();

Router.setNotFound(function(req, res){
    res.writeHeader(404);
    res.end('The page you\'re looking for and does not seem to exist.');
});

Router.setWorkDir(path.join(__dirname, 'public'));

module.exports = Router;

var controller = fs.readdirSync('./vhost/tools/controller');

controller.forEach(function(controller){
    require('./controller/' + controller);
});