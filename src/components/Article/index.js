import React, { useEffect, useState } from 'react';

/* components */
import Div from 'components/Div';
import Carousel from 'components/Carousel'

/* assets */
import MeImage from 'assets/me.jpg'
import Close from 'assets/close.svg'

/* styles */
import './styles.scss'

const Article = (props) => {

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
            <span style={{ position: 'absolute', top: '5%', right: '12%' }} onClick={onClose}>
                <img style={{ width: '25px', height: '25px' }} src={Close}/>
            </span>
            <Div className='article-content'>
                <Div className='w-100' style={{ padding: '3rem' }} align='start'>
                    <Div className='art-img'>
                        <Carousel/>
                    </Div>
                    <p className='mb-2' style={{ fontStyle: 'italic', fontSize: '15px' }}>By {props.author} / {props.date}</p>
                    <div className='mb-2' style={{ borderBottom: '1px solid black', width: '100%' }}/>
                    <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '20px' }}>{props.title}</h3>
                    <p className='h-article' style={{ fontStyle: 'italic', fontSize: '15px', paddingBottom: '10px', lineHeight: '1.5' }}>{props.description}</p>
                </Div>
            </Div>
        </Div>
    )
}

export default Article;