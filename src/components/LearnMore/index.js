import React, { useEffect, useState } from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import Close from 'assets/close.svg'

/* styles */
import './styles.scss'

const LearnMore = (props) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [])

  const onClose = () => {
    setVisible(false)
    setTimeout(() => {
      props.onClose();
    }, 250)
  }

  return(
    <Div className={`lrnmore-container ${ visible ? '' : 'hidden' }`}>
      <Div className='lrmore-content'>
        <Div className='w-100' style={{ padding: '3rem' }} align='start'>
          <span style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={onClose}>
            <img style={{ width: '25px', height: '25px' }} src={Close}/>
          </span>
          <Div className='progress'>
            <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '18px' }}>Programing Skills</h3>
            <Div className='skills'>
              <span style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.5' }}>Vanilla JS, ReactJS, VueJS, NodeJS (express), MongoDB, PHP, Laravel, Eloquent, SQL, HTML, CSS (SASS), Phyton (flask), Wordpress, Wordpress REST API, Material UI, Bootstrap, Tailwind CSS</span>
            </Div>
            <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '18px', marginTop: '30px' }}>Lenguague Skills</h3>
            <Div className='skills'>
              <span style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.5' }}>Spanish</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '100%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>100%</span>
              <span style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.5' }}>English</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '80%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>80%</span>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default LearnMore;
