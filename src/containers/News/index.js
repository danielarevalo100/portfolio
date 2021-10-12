import React, { useState } from 'react';
import { Slide } from '@material-ui/core';

/* components */
import Div from 'components/Div';
import Card from 'components/Card';

/* managers */
import Notifications from 'managers/Notifications';

/* styles */
import './styles.scss'

const News = (props) => {

  const data = [
    { author: 'Daniel Arevalo', title: 'this is  a short title 1', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 2', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 3', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 4', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 5', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 6', date: 'today' }
  ]

   
  return(
    <Div className='news-container' justify='flex-start'>
      <Div className='w-100 mb-3' align='start' data-aos='zoom-in'>
        <span style={{ fontSize: '3rem', color: '#000000', fontWeight: '700' }}>Latest news</span>
      </Div>
      <Div className='w-100' row wrap justify='space-between' data-aos='zoom-in'>
        {data.map((item, i) => (<Div key={i} className='news-article'>
          <Div style={{ cursor: 'pointer' }} onClick={() => Notifications.post('SHOW_MODAL', { modal: 'article' })}>
            <Card author='Daniel Arevalo' title='this is the desc os the new' date='today'/>
          </Div>
        </Div>))}
      </Div>
    </Div>
  )

}

export default News;
