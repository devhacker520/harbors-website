define(function(requrie, exports, module){

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
                console.log(self.value);
            }, false);
        }
    };

    module.exports = modular;
});