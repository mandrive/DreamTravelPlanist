import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import * as colors from 'material-ui/colors';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk  from 'redux-thunk';
import 'typeface-roboto'
import { applyMiddleware } from 'redux';
import { tripsReducer } from './reducers'

const browserHistory = createBrowserHistory();
const store = createStore(
  combineReducers({
    routing: routerReducer,
    trips: tripsReducer
  }),
  applyMiddleware(ReduxThunk)
)

const theme = createMuiTheme({
  palette: {
    primary: colors.lightBlue,
    secondary: colors.teal,
  },
  status: {
    danger: colors.orange,
  }
});
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
