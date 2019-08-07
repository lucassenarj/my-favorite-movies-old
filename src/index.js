import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Layout from './components/layout/Layout'
import { HomePage, MovieDetailsPage } from './pages'
import * as serviceWorker from './serviceWorker';

const app = (
  <BrowserRouter history={createBrowserHistory()} basename="/my-favorite-movies/">
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
