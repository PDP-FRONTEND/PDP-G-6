// /* Constructor Function */
// function Friend(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Friend.prototype.run = function () {
// 	console.log(`${this.name} is running...`);
// };
// Friend.prototype.jump = function () {
// 	console.log(`${this.name} is jumping...`);
// };

// const friend = new Friend("Arslonbek", 22);
// // console.log(friend.__proto__);

// // const str = new String("hello world");
// // console.log(str.repeat(2));

// /*
//  * Proto va Prototypes
//  */

// // const num = 20; // new Number(20).valueOf()
// // const str = new String("pdp-g-6");
// // const isBig = false; // new Boolean(false).valueOf()
// // const list = [1, 2, 3]; // new Array(1,2,3)

// // String.prototype.repeat = function () {
// // 	return "hello world";
// // };
// // console.log(new Number(20));

// // const text = "my text fake"; // new String('my text fake')
// // console.log(num);
// // console.log(str.repeat(2));
// // console.log(text.repeat(2));

// // console.log(isBig);
// // console.log(list);

// /*
//  * Proto va Prototypes
//  */

// // const a = 20; // new Number(20).valueOf()
// // console.log(a.__proto__ === Number.prototype);

// // const b = {}; // new Object();
// // console.log(b.__proto__ === Object.prototype);
// // console.log(Number.prototype.__proto__ === Object.prototype);

// // function Foo() {} // new Function()
// // function App() {} // new Function()
// // Function // new Function

// // Foo.prototype.run = function () {};
// // console.log(Foo.prototype); // new Object()
// // const foo = new Foo();
// // // console.log(foo.__proto__ === Foo.prototype);
// // // console.log(Foo.__proto__ === Function.prototype);

// // console.log(Foo.prototype.__proto__ === Object.prototype);

// // const obj1 = {}; // new Object();

// /* prototype, __proto__ */

// /* __proto__ -> hamma narsada bor, bu kim tomonidan yaratilganligini bildiradi */

// /* prototype -> faqat funksiyalarda bor va buni Object constructor function yaratadi */

// // function Foo() {} // new Function()
// // Foo.prototype.run = function () {}; // new Object()

// // const foo = new Foo(); // Foo{}
// // console.log(foo.__proto__ === Foo.prototype);

// // const foo1 = new Foo();
// // console.log(foo.__proto__ === foo1.__proto__);

// // console.log(Math.sin.__proto__ === Math.cos.__proto__);

// // function Math() {} // new Function
// // Math.prototype = new Object();
// // console.log(Math.prototype === Math.sin.__proto__);

// // function PDPMath() {}

// // PDPMath.min = function (...nums) {
// // 	let min = nums[0];
// // 	for (let i = 1; i < nums.length; i++) {
// // 		if (min > nums[i]) min = nums[i];
// // 	}

// // 	return min;
// // };

// // console.dir(PDPMath);
// // const result = PDPMath.min(20, 30, 15, 23);
// // console.log(result);

// // const person = {};

// // person.age = 20;

// // console.log(person);

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.run = function () {
// 	console.log(`${this.name} is running...`);
// };

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	run() {
// 		console.log(`${this.name} is running...`);
// 	}
// }

// const person1 = new Person("Arslonbek", 22);

// console.log(person1);

const elementA = document.querySelector(".a");
const elementB = document.querySelector(".b");

elementB.addEventListener(
	"click",
	(e) => {
		console.log("B CLICKED");
		// e.stopPropagation();
	},
	{ capture: true }
);
elementA.addEventListener(
	"click",
	() => {
		console.log("A CLICKED");
	},
	{ capture: true }
);

[1, 2, 3, 4, 5, 6].reduce((a, c) => a + c);
