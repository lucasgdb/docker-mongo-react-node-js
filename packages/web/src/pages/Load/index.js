import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Load() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<CircularProgress color="primary" />
		</div>
	);
}
