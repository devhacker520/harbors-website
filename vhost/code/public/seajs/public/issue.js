define(function(require, exports, module){

    var ajax = require("./ajax");

    var modular = {
        init: function(){
            this._val = document.getElementById("issue_val");
            this._btn = document.getElementById("issue_btn");

            this._bindEvent();
        },
        _bindEvent: function(){
            if(this._val === null || this._btn === null){
                return;
            }
            var self = this;
            this._btn.addEventListener('click', function(){
                if(self._val.value){
                    ajax.jsonp("/issue", {type:"bug", message: self._val.value}, function(data){
                        if(data['status'] === 0){
                            alert(data['message']);
                        }
                    });
                }
            }, false);
        }
    };

    module.exports = modular;
});