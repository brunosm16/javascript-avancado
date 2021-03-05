// =============================================================================
//  Parte 1 : Arrow Functions
// =============================================================================

// =============================================================================
//  Arrow Functions são funções anônimas, ou seja, só podem ser utilizadas
//  atribuindo a uma variável ou passando como parâmetro de outra função.
// =============================================================================

// Sem usar Arrow Function
let printName = function (name) {
	console.log(name);
};

// =============================================================================
//  Usando Arrow Function, como possui apenas uma expressão o return pode ser
//  omitido na função. Se houver apenas um argumento os parâmetros podem ser
//  omitidos.
// =============================================================================
let printNameArrow = (name) => console.log(name);

// Hoisting não funciona com arrow functions e a função é considerada undefined
// console.log(accessValidated('Marcia', false));

// =============================================================================
//  Como é preciso declarar statements o return não é omitido.
// =============================================================================
let accessValidated = (name, validated) => {
	if (validated === false) return `${name} not validated`;

	return `${name} validated`;
};

console.log(accessValidated('Bruno', true));

/* Retornando objeto através de uma arrow function 8 */
let getObj = () => ({ name: 'Bruno', age: 22 });

// console.log(getObj());

let obj = {
	context: function context() {
		this.log('Inside Context Function');

		// O contexto dentro de setTimeout é global, então o this não se refere
		// ao objet 'obj'.
		setTimeout(function () {
			// this.log('Inside setTimeout()');
            console.log(this);
		}, 1000);
        
        // Usa o bind para associar o contexto da função ao objeto 'obj', essa 
        // solução é boa mas o código fica muito verboso
        setTimeout(function () {
            this.log('Inside setTimeOut() with bind');
        }.bind(this), 1000);

        // Utiliza arrow function para associar o contexto ao objeto 'obj'
        setTimeout(() => {
            this.log('Inside setTimeOut() with arrow function');
        }, 1000);

	},
	log: function log(name) {
		console.log(name);
	},
};

obj.context();
