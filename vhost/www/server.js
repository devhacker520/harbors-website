var harbors = require("harbors");

harbors.setDebug(4);

var Router = harbors.Router.create();

Router.setNotFound(function(req, res){
    res.writeHeader(302,{
        Location: "http://code.test.itharbors.com"
    });
    res.end();
});

module.exports = Router;