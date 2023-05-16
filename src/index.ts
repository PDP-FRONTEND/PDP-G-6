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
function run() {
	console.log(this);
}

const person = {
	name: "Kent",
	age: 20,
	run,
};

person.run();

run();

// Expression and Statement

function app() {
	if (10 > 0) return 20;
	else return 15;
}

const result = 20 > 10 ? "katta" : "kichik";

// const a = ;

const myApp = function app() {};

//  Function expression