import React from 'react';
import { Container, Button } from '@material-ui/core';

import Header from '~/components/Header';
import { useAuth } from '~/contexts/auth.context';

export default function SignUp() {
	const { signUp } = useAuth();

	async function handleSignUp() {
		signUp('Lucas Bittencourt', 'lucasgdbittencourt@gmail.com', '123');
	}

	return (
		<>
			<Header />

			<Container style={{ marginTop: 10 }}>
				<Button color="primary" onClick={handleSignUp}>
					Sign up
				</Button>
			</Container>
		</>
	);
}
