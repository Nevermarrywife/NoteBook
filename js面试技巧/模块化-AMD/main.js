// 全局require，使得html文件里可以引用到这个js文件
require(['a.js'],function(a){
	a.printf();
})