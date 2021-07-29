import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { Collapse } from '@material-ui/core';

/* components */
import Div from 'components/Div';

/* styles */
import './styles.scss'

const menu = ['Home', 'About', 'Portfolio', 'News', 'Contact'];

const routes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/news', title: 'News' },
  { path: '/contact', title: 'Contact' },
]

const isMobile = window.innerWidth < 1024;

const Header = (props) => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Div className='header-container' >
      {!isMobile && (
        <Div className='header-mobile' style={{ width: '25rem' }} align='start' data-aos='fade-right'>
          <Div className='mb-3'>
            <h1>DEAS</h1>
          </Div>
          <Div className='nav mb-3 nav-mobile' align='start'>
            {routes.map( ({ path, title }) => (<span style={{ color: props.location.pathname == path && '#000000' || '' }} onClick={() => props.history.push(path)} key={path} className='menu-item mb-2'>{title}</span>) )}
          </Div>
          <Div className='' align='start' >
            <span style={{ fontStyle: 'italic', color: '#999999' }}>&#169; 2021 Deas</span>
            <span style={{ fontStyle: 'italic', color: '#999999' }}>Created by Daniel Arevalo</span>
          </Div>
        </Div>
      ) || (
        <Div>
          <Div onClick={() => setShowMenu(!showMenu)} className='mb-3'>
            <h1>DEAS</h1>
          </Div>
          <Div style={{ width: '100%' }}>
            <Collapse in={showMenu}>
              <Div column>
                {routes.map( ({ path, title }) => (<span style={{ color: props.location.pathname == path && '#000000' || '' }} onClick={() => props.history.push(path)} key={path} className='menu-item mb-2'>{title}</span>) )}
              </Div>
            </Collapse>
          </Div>
        </Div>
      )}

    </Div>

  )

}

export default withRouter(Header);
