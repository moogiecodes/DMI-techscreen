/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ListContainer from '../ListContainer/Loadable';
import AddFoodContainer from '../AddFoodContainer/Loadable';
import Navbar from '../../components/Navbar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route exact path="/" component={ListContainer} />
        <Route exact path="/add" component={AddFoodContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
