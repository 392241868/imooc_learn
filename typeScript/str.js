function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = 'wanghaihua';
var getAge = function () {
    return 18;
};
(_a = [" my name is", ",my age is", ""], _a.raw = [" my name is", ",my age is", ""], test(_a, myName, getAge()));
var _a;
//# sourceMappingURL=str.js.map