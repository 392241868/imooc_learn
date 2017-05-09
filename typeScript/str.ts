function test(template, name, age) { 
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = 'wanghaihua'
var getAge = function () { 
    return 18;
}
test` my name is${myName},my age is${getAge()}`;