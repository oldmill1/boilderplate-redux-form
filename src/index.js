import React from 'react'
import ReactDOM from 'react-dom'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './App'

const fakeReducer = (state = {}, action) => state

const reducers = {
    fakeReducer,
    form: formReducer
}

const reducer = combineReducers(reducers)

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
