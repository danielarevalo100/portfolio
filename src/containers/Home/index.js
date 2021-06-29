import React from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import MeImage from 'assets/me.jpg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

/* styles */
import './styles.scss';

const Home = () => {
  return(
    <Div className='home-container' row>
      <img className='mr-3 me-image' src={MeImage} data-aos='zoom-in'/>
      <Div align='start'  data-aos='fade-left'>
        <h2 className='mb-2'>Daniel Arevalo</h2>
        <span className='mb-2' style={{ fontStyle: 'italic', lineHeight: '2', fontSize: '1.5rem' }}>Proeficient front-end web developer based on Buenos Aires,<br/> Argentina, happy to learn new things</span>
        <Div row>
          <FacebookIcon style={{ fontSize: '2rem', marginRight: '1rem' }}/>
          <TwitterIcon style={{ fontSize: '2rem', marginRight: '1rem' }}/>
          <InstagramIcon style={{ fontSize: '2rem', marginRight: '1rem' }}/>
          <LinkedInIcon style={{ fontSize: '2rem', marginRight: '1rem' }}/>
        </Div>
      </Div>

    </Div>
  )
}

export default Home;
