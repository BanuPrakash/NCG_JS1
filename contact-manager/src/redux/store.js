import { compose, createStore } from "redux";
import rootReducer from './reducer'; // index.js

const store = createStore(rootReducer, compose(window.__REDUX_DEV_TOOLS_EXTENSION__()));

