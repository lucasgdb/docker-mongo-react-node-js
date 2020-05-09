import React from 'react';
import { Container, Button } from '@material-ui/core';

import Header from '~/components/Header';
import { useAuth } from '~/contexts/auth.context';

export default function SignIn() {
	const { signIn } = useAuth();

	function handleSignIn() {
		signIn('lucasgdbittencourt@gmail.com', '123');
	}

	return (
		<>
			<Header />

			<Container style={{ marginTop: 10 }}>
				<Button color="primary" onClick={handleSignIn}>
					Sign in
				</Button>
			</Container>
		</>
	);
}
