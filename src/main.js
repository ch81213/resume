import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Panel from './containers/Panel';

import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Foxconn from './pages/Foxconn';
import Skill from './pages/Skill';
import Mitac from './pages/Mitac';
import Introduction from './pages/Introduction';

ReactDOM.render(
  <Provider store={configureStore}>
      <Router history={hashHistory}>
            <Route path="/" component={Panel}>
                <IndexRoute component={Introduction}/>
                <Route path="introduction" component={Introduction}></Route>
                <Route path="foxconn" component={Foxconn}></Route>
                <Route path="mitac" component={Mitac}></Route>
                <Route path="skill" component={Skill}></Route>
            </Route>
       </Router> 
  </Provider>
  , document.getElementById('app'));
