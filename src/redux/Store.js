import { legacy_createStore as createStore , applyMiddleware} from 'redux'
import rootReducer from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const Store = createStore(rootReducer , {} , composeWithDevTools(applyMiddleware(thunk)));
export default Store;
