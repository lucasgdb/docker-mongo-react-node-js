import React from 'react';
import { Container } from '@material-ui/core';

import Header from '~/components/Header';

export default function Unauthenticated() {
	return (
		<>
			<Header />

			<Container>
				<h1 style={{ color: '#333', textAlign: 'center' }}>
					You do not have permissions to access that page.
				</h1>
			</Container>
		</>
	);
}
