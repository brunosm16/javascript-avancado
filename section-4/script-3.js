// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User logged', data);
	}

	greetUser(data) {
		this.emit('Greet User', data);
	}
}

// const emitter = new EventEmitter();

const users = new Users();

users.on('User logged', (data) => console.log(data));

users.once('Greet User', (data) => console.log(data));

users.userLogged({ user: 'Bruno Silveira' });
users.greetUser({ message: 'Hello' });

// Adiciona Event
// emitter.on('User logged', (data) => console.log(data));

// Emite Evento
// emitter.emit('User logged', { user: 'Bruno Silveira' });
