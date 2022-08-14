import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from '../state/reducers/reducers';
import thunk from 'redux-thunk';


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
