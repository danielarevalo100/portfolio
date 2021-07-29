import React from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import MeImage from 'assets/me.jpg'

/* styles */
import './styles.scss';

const About = (props) => {

  return(
    <Div className='about-container'>
      <img className='me-image mb-3' src={MeImage} data-aos='fade-left'/>
      <Div className='w-100' align='start'>
        <span className='me-name mb-2' >Daniel Arevalo Web developer</span>
      </Div>
      <Div className='w-100' className='about-mobile' row align='flex-start' justify='space-between' data-aos='fade-up'>
        <Div style={{ width: '45%' }} className='dveloper-mobile' align='start'>
          <span className='me-desc mb-2' >Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</span>
          <Div className='button'><span>Learn More</span></Div>
        </Div>
        <Div style={{ width: '40%' }}>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Birthday:</span> 03/05/1998</span></Div>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Age:</span> 23</span></Div>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Address:</span> Solis 668, Buenos Aires Argentina</span></Div>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Email:</span> danielarevalo100@gmail.com</span></Div>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Phone:</span> +54 11 27491933</span></Div>
          <Div className='w-100' row justify='start'><span style={{ fontSize: '1.4rem', lineHeight: '2' }}><span className='info-title'>Freelance:</span> Available</span></Div>
        </Div>


      </Div>

    </Div>
  )

}

export default About;
