// =============================================================================
// Enhanced Object Literals
// =============================================================================

const favLanguage = 'JavaScript';

// Declarando um Objeto
const obj = {
	name: 'Bruno',
	age: '22',
	favLanguage, // Usando Enhanced Object Literals
	greeting() {
		console.log(`Olá ${this.name}`);
	},
};

console.log(obj);
obj.greeting();