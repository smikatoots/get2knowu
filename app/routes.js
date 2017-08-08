import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './components/App';
import AppContainer from './containers/AppContainer';

export default (
	<Switch>
		<Route exact path="/" component={AppContainer} />
	</Switch>
);
