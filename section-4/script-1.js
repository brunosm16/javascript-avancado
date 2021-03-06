// =============================================================================
// Aprendendo sobre Callbacks e Promises
// =============================================================================

function doSomething(callback) {
	setTimeout(function () {
		callback('First Data');
	}, 1000);
}

function doOtherThing(callback) {
	setTimeout(function () {
		callback('Second Data');
	}, 1000);
}

// =============================================================================
// Código que não utiliza o conceito de Promises
// =============================================================================
function doALL() {
	try {
		// call first funciton
		doSomething(function (data) {
			let dataOne = data.split(' ');

			try {
				// call second function
				doOtherThing(function (data2) {
					let dataSecond = data2.split(' ');

					try {
						// wait 2 seconds and print the two data
						setTimeout(() => {
							console.log(dataOne, dataSecond);
						}, 1000);
					} catch (err) {
						// handle error
					}
				});
			} catch (err) {
				// handle error
			}
		});
	} catch (err) {
		// handle error
	}
}

// doALL();

// =============================================================================
// Utilizando Promises para deixar o processo da função doALL() mais redigível.
// =============================================================================

const doSomethingPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('First Data');
		}, 1000);
	});

const doAnotherThingPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Second Data');
		}, 1000);
	});

// doSomethingPromise
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// // Encadeamento de Promises
// doSomethingPromise()
// 	.then((data) => {
// 		console.log(data.split(' '));
// 		return doAnotherThingPromise();
// 	})
// 	.then((secondData) => console.log(secondData.split(' ')))
// 	.catch((error) => console.log(error)); // O erro de qualquer Promise é tratado por esse único catch

// Promises em Paralelo
Promise.all([doSomethingPromise(), doAnotherThingPromise()])
	.then((data) => {
		console.log(data[0].split(' '));
		console.log(data[1].split(' '));
	})
	.catch((error) => console.log(error));
