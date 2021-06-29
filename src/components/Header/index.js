import React from 'react';
import { withRouter } from 'react-router'

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
const Header = (props) => {
  return (
    <Div className='header-container' >
      <Div style={{ width: '25rem' }} align='start' data-aos='fade-right'>
        <Div className='mb-3'>
          <h1>DEAS</h1>
        </Div>
        <Div className='nav mb-3' align='start'>
          {routes.map( ({ path, title }) => (<span style={{ color: props.location.pathname == path && '#000000' || '' }} onClick={() => props.history.push(path)} key={path} className='menu-item mb-2'>{title}</span>) )}
        </Div>
        <Div className='' align='start' >
          <span style={{ fontStyle: 'italic', color: '#999999' }}>&#169; 2021 Deas</span>
          <span style={{ fontStyle: 'italic', color: '#999999' }}>Created by Daniel Arevalo</span>
        </Div>
      </Div>

    </Div>

  )

}

export default withRouter(Header);
