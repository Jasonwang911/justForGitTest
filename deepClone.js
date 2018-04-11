// js的数据类型分为基本数据类型和引用数据类型

// 拷贝的深浅对局基本数据类型没有区别，主要对于引用数据类型

// 前拷贝： 只渎职引用，而未复制真正的值

const originArray = [1,2,3,4,5];
const originObj = {a: 'a', b: 'b', c: [1,2,3], d: {dd: 'dd'}};

const cloneArray = originArray;
const cloneObj = originObj;

console.log(cloneArray);
console.log(originObj);


var a = 000;