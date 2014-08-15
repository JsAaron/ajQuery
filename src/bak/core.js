/**
 * jquery精简分析版aQuery
 */
var aQuery;

var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;

aQuery = function(selector, context) {
    return aQuery.prototype.init(selector, context)
}


aQuery.prototype = {

    jquery: '2.0.3', //版本号

    init: function(selector, context) {

        this.length = 1;

        var match, elem;

        if (!selector) { //容错
            return this;
        }

        if (typeof selector === "string") {
            //"<"开始，">"结尾 $('<p id="test">My <em>new</em> text</p>')这种的情况
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                match = [null, selector, null];
            } else {
                match = rquickExpr.exec(selector);
            }

        }
    },

    length: 2,

    first: function() {
         //console.log(this.jquery,111)
    },

    size:function(){
        alert(this.length)
    }

}

window.onload = function() {


 //   console.log(Sizzle)

}