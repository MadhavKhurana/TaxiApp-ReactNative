import React, {useState} from 'react';
import {Text, View} from 'react-native';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router} from 'react-native-router-flux';
import scenes from './src/routes/scenes';
import HomeReducer from './Redux/Reducers/HomeReducer';
// import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  home: HomeReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleware)),
);

const App = () => {
  return (
    <Provider store={store}>
      <Router scenes={scenes}></Router>
    </Provider>
  );
};

export default App;
