import React from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import MeImage from 'assets/me.jpg'

/* styles */
import './styles.scss'

const Card = (props) => {
  return(
    <Div className='card w-100'>
      <img src={MeImage} />
      <Div className='w-100' style={{ padding: '3rem' }} align='start'>
        <span className='mb-2' style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>By {props.author} / {props.date}</span>
        <div className='mb-2' style={{ borderBottom: '1px solid black', width: '100%' }}/>
        <span className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '1.6rem' }}>{props.title}</span>
        <span className='' style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>Read more</span>
      </Div>
    </Div>
  )
}

export default Card;
