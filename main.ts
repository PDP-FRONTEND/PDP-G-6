// function sum<F, S>(first: F, second: S): { first: F; second: S } {
// 	return { first, second };
// }

// const { first, second } = sum(false, "hello");

// console.log(first.valueOf)

// function _useParams<T>(): T {
// 	return {} as T;
// }

// const { productID } = _useParams<{ productID: string }>();

type FunPowTwo = (num: number) => { result: number };

const powTwo: FunPowTwo = (num) => {
	return { result: num * 2 };
};

const { result } = powTwo(10);

console.log("result = ", result);

type T = ReturnType<FunPowTwo>;
