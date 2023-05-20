/* Constructor Function */
function Friend(name, age) {
	this.name = name;
	this.age = age;
}

Friend.prototype.run = function () {
	console.log(`${this.name} is running...`);
};
Friend.prototype.jump = function () {
	console.log(`${this.name} is jumping...`);
};

const friend = new Friend("Arslonbek", 22);
// console.log(friend.__proto__);

// const str = new String("hello world");
// console.log(str.repeat(2));

/*
 * Proto va Prototypes
 */

const num = 20; // new Number(20).valueOf()
const str = new String("pdp-g-6");
const isBig = false; // new Boolean(false).valueOf()
const list = [1, 2, 3]; // new Array(1,2,3)

String.prototype.repeat = function () {
	return "hello world";
};
// console.log(new Number(20));

const text = "my text fake"; // new String('my text fake')
console.log(num);
console.log(str.repeat(2));
console.log(text.repeat(2));

// console.log(isBig);
// console.log(list);
