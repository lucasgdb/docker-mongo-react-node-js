import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Load from '~/pages/Load';

const Landing = lazy(() => import('~/pages/Landing'));
const SignIn = lazy(() => import('~/pages/SignIn'));
const SignUp = lazy(() => import('~/pages/SignUp'));
const Unauthenticated = lazy(() => import('~/pages/Unauthenticated'));
const Error404 = lazy(() => import('~/pages/Error404'));

export default function AuthRoutes() {
	return (
		<Suspense fallback={<Load />}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/app" component={Unauthenticated} />
				<Route path="*" component={Error404} />
			</Switch>
		</Suspense>
	);
}
