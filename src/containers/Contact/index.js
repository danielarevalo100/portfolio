import React from 'react';

/* components */
import Div from 'components/Div';

/* styles */
import './styles.scss'

const Contact = () => {
   
  return(
    <Div className='news-container'>
      <Div className='w-100 mb-3' align='start'>
        <span style={{ fontSize: '3rem', color: '#000000', fontWeight: '700' }} data-aos='fade-left'>Get in touch</span>
      </Div>
      <Div className='w-100' row wrap justify='space-between'  data-aos='fade-up'>
        <input className='mb-3 w-100 custom-input' placeholder='Name' type='text'/>
        <input className='mb-3 w-100 custom-input' placeholder='Email' type='email'/>
        <textarea rows='5' className='mb-3 w-100 custom-input' placeholder='Name' type='text'/>
        <Div className='button'>
          <span>Submit</span>
        </Div>

      </Div>
    </Div>
  )

}

export default Contact;
