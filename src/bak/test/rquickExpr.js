
var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;


var str = '#test';
var match = rquickExpr.exec(str);
console.log(match)
//["#test", undefined, "test", index: 0, input: "#test"]

//[" <div id=top></div>", "<div id=top></div>", undefined, index: 0, input: " <div id=top></div>"]

// $(function(){

 	$(str)

// })