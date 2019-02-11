import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
// import routes from './routes';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, reduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import registerServiceWorker from './serviceWorker';

const store = createStore(rootReducer, 
	compose(
	applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
	reduxFirestore(fbConfig),
	reduxFirebase(fbConfig)
	)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
