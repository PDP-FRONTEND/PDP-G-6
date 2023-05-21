// const person = {
// 	name: "Kent",
// 	run: () => {
// 		// @ts-ignore
// 		console.log(`${this.name} is running...`);
// 	},
// };

// person.run(); // Kent is running...

// const first = () => {
// 	console.log(this);
// };

// function second() {
// 	console.log(this);
// }

// first(); //
// second(); //

// this
// function run() {
// 	console.log(this);
// }

// const person = {
// 	name: "Kent",
// 	age: 20,
// 	run,
// };

// person.run();

// run();

// // Expression and Statement

// function app() {
// 	if (10 > 0) return 20;
// 	else return 15;
// }

// const result = 20 > 10 ? "katta" : "kichik";

// // const a = ;

// const myApp = function app() {};

// //  Function expression

/* Function methods */

/* Call */

// const person = {
// 	name: "Kent",
// 	run(a, b, c, d) {
// 		console.log({ a, b, c, d });
// 		console.log(`${this.name} is running...`);
// 	},
// };

// const person1 = {
// 	name: "arslonbek",
// };

// // person.run();

// const run = person.run;
// run.call(person, 10, 20, 30, 40);
// run.apply(person, [10, 20, 30, 40]);

// const run1 = person.run.bind(person1);

// const person = {
// 	name: "arslonbek",
// 	age: 20,
// };

// const person1 = Object.assign({}, person);
// const person1 = { ...person };

// person1.age = 100;

// console.log(person);
// console.log(person1);

// const nums = [1, 2, 3];

// const nums1 = [...nums];
// nums1[0] = 20;

// console.log(nums);
// console.log(nums1);

// SPREAD OPERATOR
// const [first, ...nums1] = [...nums];

// console.log(first);
// console.log(nums1);

// function app(...args: number[]) {
// 	console.log(args);
// }

// app(...nums);

// function run() {
// 	console.log(`${this.name} is running...`);
// }

// function sakra() {
// 	console.log(`${this.name} sakramoqda...`);
// }

// type Name = "Arslonbek" | "Boburbek" | "Erkinbek" | "Siroj";

/*-----Factory function-----*/
// function createFriend(name: Name, age: number) {
// 	return {
// 		name,
// 		age,
// 	};
// }

// const factoryFriend = createFriend("Erkinbek", 20);

// console.log(factoryFriend);
// /* Constructor Function */
// function Friend(name: Name, age: number) {
// 	this.name = name;
// 	this.age = age;
// }

// Friend.prototype.run = function () {
// 	console.log(`${this.name} is running...`);
// };
// Friend.prototype.jump = function () {
// 	console.log(`${this.name} is jumping...`);
// };

// const friend1 = new Friend("Arslonbek", 22);
// const friend2 = new Friend("Boburbek", 32);
// friend1.jump();
// friend2.run();
// console.log(friend1);
// console.log(friend2);
