import React, { useState } from 'react';
import { Slide } from '@material-ui/core';

/* components */
import Div from 'components/Div';
import Card from 'components/Card';

/* styles */
import './styles.scss'

const News = () => {

  const [showNew, setShowNew] = useState(false);
  const [currentNew, setCurrentNew] = useState({})

  const data = [
    { author: 'Daniel Arevalo', title: 'this is  a short title 1', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 2', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 3', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 4', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 5', date: 'today' },
    { author: 'Daniel Arevalo', title: 'this is  a short title 6', date: 'today' }
  ]

  const handleNewsClick = (index) => {
    setShowNew(true)
    console.log('here')
    setCurrentNew(data[index])
  }
   
  return(<>
    <Div className='news-container' justify='flex-start'>
      <Div className='w-100 mb-3' align='start' data-aos='zoom-in'>
        <span style={{ fontSize: '3rem', color: '#000000', fontWeight: '700' }}>Latest news</span>
      </Div>
      <Div className='w-100' row wrap justify='space-between' data-aos='zoom-in'>
        {data.map((item, i) => (<Div key={i} onClick={() => handleNewsClick(i)} className='news-article'>
          <Card author='Daniel Arevalo' title='this is the desc os the new' date='today'/>
        </Div>))}
      </Div>
    </Div>
    {Object.keys(currentNew).length > 0 && <Slide in={showNew} direction='up' style={{ position: 'absolute', bottom: 0 }}>
      <div className=''>
        <Div className='' style={{ backgroundColor: '#00000025'}}>
          here
        </Div>
      </div>
    </Slide>}
  </>)

}

export default News;
