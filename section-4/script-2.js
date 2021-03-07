// =============================================================================
// Aprendendo sobre Fetch, Async/Await e EventEmitter
// =============================================================================

// Utilizando o fetch

fetch('./data.json')
	.then((response) => {
		if (response.status === 200) {
			return response.json();
		} else {
			throw new Error('Request Error');
		}
	})
	.then((data) => console.log(data));

// Ocasionando o Error de Propósito, o Request Error é colocado para está mais claro o que ocorreu
// ao tentar fazer o request.
// fetch('./data2.json')
// 	.then((response) => {
// 		if (response.status === 200) {
// 			return response.json();
// 		} else {
// 			throw new Error('Request Error');
// 		}
// 	})
// 	.then((data) => console.log(data));

// ES7 - Async/ Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dentro de Async Timer');
    }, 3000);
});

const func = async () => {
	// throw new Error('Mock Error');
	const data = await asyncTimer();

	return data;
};

// Retorna uma Promise já resolvida, porque no momento que é utilizada a palavra async, a Promise é
// resolvida e já retornada.
// console.log(func());

func()
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
