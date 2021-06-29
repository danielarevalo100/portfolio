import React from 'react';

/* components */
import Div from 'components/Div';
import Card from 'components/Card';

/* styles */
import './styles.scss'

const News = () => {
   
  return(
    <Div className='news-container' justify='flex-start'>
      <Div className='w-100 mb-3' align='start' data-aos='zoom-in'>
        <span style={{ fontSize: '3rem', color: '#000000', fontWeight: '700' }}>Latest news</span>
      </Div>
      <Div className='w-100' row wrap justify='space-between' data-aos='zoom-in'>
        <Div style={{ width: '50%', padding: '2rem' }}>
          <Card/>
        </Div>
        <Div style={{ width: '50%', padding: '2rem' }}>
          <Card/>
        </Div>
        <Div style={{ width: '50%', padding: '2rem' }}>
          <Card/>
        </Div>
        <Div style={{ width: '50%', padding: '2rem' }}>
          <Card/>
        </Div>
      </Div>
    </Div>
  )

}

export default News;
