import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

/* components */
import Div from 'components/Div';
import Header from 'components/Header';

/* conatiners */
import Home from 'containers/Home';
import About from 'containers/About';
import News from 'containers/News';
import Contact from 'containers/Contact';

/* styles */
import './styles.scss';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return(
    <Route {...rest} render={(props) => auth && <Component/> || <Redirect to='/access' />}/>
  )
}

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/news', component: News },
  { path: '/contact', component: Contact },
]

const App = (props) => {

  return(
    <Div className='app-container' row style={{ height: window.innerHeight+'px' }}>
      <Router>
        <Header/>
        <Div className='content' row align='flex-start'>
          <Switch>
            {routes.map(({ path, component }) => (<Route key={path} path={path} exact component={component}/>))}
          </Switch>
        </Div>
      </Router>
    </Div>
  )

}

export default App;
