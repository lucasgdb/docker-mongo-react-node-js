import React from 'react';
import { Container } from '@material-ui/core';

import Header from '~/components/Header';

export default function ErrorPage() {
	return (
		<>
			<Header />

			<Container>
				<h1 style={{ color: '#333', textAlign: 'center' }}>
					That page does not exist on our server.
				</h1>
			</Container>
		</>
	);
}
