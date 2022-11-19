import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducer';

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

const store = configureStore({ reducer: rootReducer });

export default store;

