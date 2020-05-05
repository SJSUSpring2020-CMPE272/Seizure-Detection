import thunk from 'redux-thunk'
import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from './redux/reducer/rootReducer'



const initialState = {};

const middleware = [thunk];

const store=createStore(rootReducer,
    initialState,
    compose(applyMiddleware(thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);

export default store;