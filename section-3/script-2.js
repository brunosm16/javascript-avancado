// =============================================================================
// Aprendendo sobre Generators
// =============================================================================

// Generators
function* hello() {
	console.log('Hello');
	yield 1; // keyword que realiza pausas

	console.log('From');
	const value = yield 2;

	console.log('Function');

	console.log(value);
}

const it = hello();

// A acada next vai executando uma linha
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside')); // Retorna no yield assim que é invocado

// Gera um range infinito de números naturais
function* naturalNumbers() {
	let number = 0;

	while (true) {
		yield number;
		number++;
	}
}

const it2 = naturalNumbers();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// Utilizando Iterator em um Objeto
const obj = {
	values: [1, 2, 3, 4, 5],
	*[Symbol.iterator]() {
		for (let i = 0; i < this.values.length; i++) yield this.values[i];
	},
};

for (let value of obj) console.log(value);
