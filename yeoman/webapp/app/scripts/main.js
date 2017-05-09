function test(name){
this.name=name;
}
test.prototype.getName = function(argument){
	return name;
};
var aa=new test("wanghaihua");

