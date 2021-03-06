var harbors = require("harbors");

var server = harbors.Cluster.create();

var Listen = {
    80: function(){
        var vhost = harbors.VHost.create();
        vhost.addDomain('code.itharbors.com', require("./vhost/code/server"));
        vhost.addDomain('www.itharbors.com', require("./vhost/www/server"));
        vhost.addDomain('tools.itharbors.com', require("./vhost/tools/server"));
        harbors.Server.create('http', 80, vhost);
    },
    3000: function(){
        var vhost = harbors.VHost.create();
        vhost.addDomain('code.itharbors.com', require("./vhost/code/server"));
        vhost.addDomain('www.itharbors.com', require("./vhost/www/server"));
        vhost.addDomain('tools.itharbors.com', require("./vhost/tools/server"));
        harbors.Server.create('http', 3000, vhost);
    }
};

server.setTask('80', Listen['80']);
//server.setTask('3000', Listen['3000']);

server.fork('80');
server.fork('80');
//server.fork('3000');