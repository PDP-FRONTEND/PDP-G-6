// function app() {
// 	const text = "app";
// 	console.log("hello " + text);
// }

// // show();

// const test = "20";

// let a = 20;
// let b = a;
// b = 40;
// console.log(a); //
// console.log(b); //

// const person = {
// 	name: "Kent",
// 	age: 20,
// 	address: {
// 		state: "UZB",
// 		city: "Tashkent",
// 	},
// };

// const person1 = structuredClone(person);
// person1.name = "Mark";
// person1.address.city = "Xorazm";

// console.log(person); // { state: "UZB", city: "Xorazm"  }
// console.log(person1); // { state: "UZB", city: "Xorazm"  }

// setTimeout(() => console.log("first"), 0); //
// Promise.resolve("second").then(console.log); //
// console.log("third"); //
// setTimeout(() => Promise.resolve("four").then(console.log), 0); // 4
// setTimeout(() => console.log("five"), 0); // 5

/**
 * Muhammadamir : 3,2,1,4,5,
 * Bekzod | Sardor: 3,2,4,1,5
 * Abdulbosit | Kamron: 3,2,5,1,4
 * Abdumalik: 3,1,5,2,4
 * Izzatilla: 3,2,4,5,1
 * Arslonbek | Olamgir: 3,2,1,4,5
 *
 */

/**
 * -----OUTPUT----
 * "THIRD"
 * "SECOND"
 * "FIRST"
 * "FOUR"
 * "FIVE"
 *
 *
 *
 */

/**
 * ------TASKS-----
 * ✅ console.log("second") ❌
 * ✅ console.log("first") ❌
 * ✅ () => Promise.resolve("four").then(console.log) ❌
 * ✅ console.log("four") ❌
 * ✅ console.log("five") ❌
 *
 *
 */

// const users = [
// 	{ id: 123, username: "arslonbek" },
// 	{ id: 133, username: "jamshidbek" },
// 	{ id: 143, username: "boburbek" },
// ];

// function getUsers() {
// 	return fetch("https://jsonplaceholder.typicode.com/users");
// }

// async function init() {
// 	console.log("Loading users...");
// 	const res = await getUsers();
// 	const users = await res.json();
// 	console.log("users  = ", users);
// }

// init();

/* OOP(Object Oriented Programming) */

// const person = {
// 	name: "arslonbek",
// };

// class MyString extends String {
// 	hi() {
// 		console.log(`hello world`);
// 	}
// }

// const str1 = new String("pdp-g-6");
// const str2 = new MyString("pdp-g-6");

// const first = () => {
// 	console.log(this);
// };

// function second() {
// 	console.log(this);
// }

// first();
// second();

// const person = {
// 	name: "Kent",
// 	run() {
// 		const jump = () => {
// 			console.log(`${this.name} is jumping...`);
// 		};
// 		jump();
// 	},
// };

// person.run();

// console.log(first);
// second();

// const first = () => {
// 	console.log("hello first!");
// };

// function second() {
// 	console.log("hello second!");
// }

/**
 * Let vs Const vs Var
 * ✅ hammasi hoisted boladi
 * ✅ const va let temprol deadzone
 * ✅ scoping { blockScope: [let, const], functionScope: [var] }

 *
 */

// {
// 	var text = "hello world";
// }
// console.log(text);

// for (let i = 1; i <= 10; i++) {
// 	console.log(`i = ${i}`);
// }

// console.log(`i = ${i}`);

// {
// 	{
// 		var a = 30;
// 		function app() {
// 			var a = 20;
// 		}
// 		console.log(a);
// 	}
// }

// var a = 20;

// function log() {
// 	if (a) console.log(a);

// 	if (a > 10) console.log("a katta 10 dan");

// 	var a = 40;
// 	console.log(a);
// }

// log();
