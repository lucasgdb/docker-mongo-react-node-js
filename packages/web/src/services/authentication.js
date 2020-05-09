import authAPI from './authAPI';

export async function signIn(email, password) {
	try {
		const response = await authAPI.post('/', { email, password });

		const { data } = response;

		return data;
	} catch (err) {
		throw err;
	}
}

export async function signUp(name, email, password) {
	try {
		const response = await authAPI.post('/register', {
			name,
			email,
			password,
		});

		const data = response.data;

		return data;
	} catch (err) {
		throw err;
	}
}
