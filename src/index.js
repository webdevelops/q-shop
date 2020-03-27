
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, Container } from '@material-ui/core';
import { HashRouter } from 'react-router-dom'

import createRootReducer from './store/reducers';
import theme from './theme';
// import TopLine from './containers/TopLine';
import Routes from './Routes';


const middlewares = [thunk];
const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container /* maxWidth="xl" */ style={{minWidth: 320}} fixed>
          {/* <TopLine /> */}
          <Routes />
        </Container>
      </ThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);