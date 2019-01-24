import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './App';
import Dashboard from './components/dashboard/dashboard';
import NotFound from './components/layout/notFound';

export default(
    <Route history={ browserHistory } path="/" component= { App }>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="/dashboard" component="dashboard"></Route>
        <Route path="*" component={ NotFound }></Route>
    </Route>
)