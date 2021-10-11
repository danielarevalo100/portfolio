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
    <Div className={`article-container ${ visible ? '' : 'hidden' }`}>
      <Div className='article-content'>
        <Div className='w-100' style={{ padding: '3rem' }} align='start'>
          <span style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={onClose}>
            <img style={{ width: '25px', height: '25px' }} src={Close}/>
          </span>
          <Div className='progress'>
            <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '18px' }}>Programing Skills</h3>
            <Div className='skills'>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>C</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '70%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>70%</span>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>JavaScript</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '80%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>80%</span>
            </Div>
            <Div className='skills'>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>REACT</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '60%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>60%</span>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>Wordpress</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '75%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>75%</span>
            </Div>
            <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '18px', marginTop: '30px' }}>Lenguague Skills</h3>
            <Div className='skills'>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>Spanish</span>
              <Div className='pbar'>
                <Div className='blckbar' style={{ width: '100%' }}>
                </Div>
              </Div>
              <span className='porc' style={{ fontStyle: 'italic', fontSize: '14px' }}>100%</span>
              <span style={{ fontStyle: 'italic', fontSize: '14px' }}>English</span>
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
