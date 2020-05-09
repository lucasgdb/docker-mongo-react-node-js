import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './app.route';
import AuthRoutes from './auth.route';
import Load from '~/pages/Load';
import { useAuth } from '~/contexts/auth.context';

export default function Routes() {
	const { loading, user } = useAuth();

	if (loading) {
		return <Load />;
	}

	return (
		<BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
	);
}
