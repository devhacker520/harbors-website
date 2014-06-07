define(function(require, exports, module){

    var modular = {
        /**
         *
         * @param {object} option
         * {
         *     url: {string},
         *     data: {object}
         * }
         * @param callback
         */
        jsonp: function(url, data, callback){
            if(typeof url !== "string"){
                throw new Error("Invalid URL");
            }
            switch(typeof data){
                case "function":
                    callback = data;
                    data = {};
                    break;
                case "undefined":
                    data = {};
            }
            //生成函数
            var funName = "jsonp_" + (Math.random()*1000000000 | 0);

            window[funName] = function(data){
                typeof callback === "function" && callback(data);
            };

            if(/\?/.test(url)){
                url += "&callback=" + funName;
            }else{
                url += "?callback=" + funName;
            }

            for(var p in data){
                url += "&" + p + "=" + data[p];
            }

            var script = document.createElement("script");
            script.src = url;

            script.onload = script.onerror = function(){
                delete window[funName];
                document.head.removeChild(script);
            };

            document.head.appendChild(script);
        }
    };

    module.exports = modular;

});