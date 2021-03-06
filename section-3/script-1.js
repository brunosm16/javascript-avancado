// =============================================================================
// Aprendendo sobre Symbols
// =============================================================================

const uniqueId = Symbol('UniqueId');
const uniqueId2 = Symbol('UniqueId');

// Não são iguais
console.log(uniqueId === uniqueId2);

const obj = {
	[uniqueId]: 'Hello',
};

console.log(obj);

// uniqueId não aparece como uma chave do objeto
console.log(Object.keys(obj));

// Consegue obter os symbols do objeto
console.log(Object.getOwnPropertySymbols(obj));

// Well Known Symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [10, 20, 30, 40, 50];

// Acessa a propriedade iterator, retorna um objeto com o método next.
const iterator = arr[Symbol.iterator]();

// Percorre o array
while (true) {
	let { value, done } = iterator.next();

	if (done) break;

	console.log(value);
}


// console.log(iterator.next());
