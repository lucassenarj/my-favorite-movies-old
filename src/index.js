import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { HomePage } from './pages'
import * as serviceWorker from './serviceWorker';

import { getPopularMovies } from './services/movies'

getPopularMovies().then(results => console.log(results))

const app = (
  <BrowserRouter history={createBrowserHistory()} basename="/">
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
