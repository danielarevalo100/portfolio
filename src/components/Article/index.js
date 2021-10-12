import React, { useEffect, useState } from 'react';

/* components */
import Div from 'components/Div';

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
            <span style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={onClose}>
                <img style={{ width: '25px', height: '25px' }} src={Close}/>
            </span>
            <Div className='article-content'>
                <Div className='w-100' style={{ padding: '3rem' }} align='start'>
                    <Div className='art-img'>
                        <img src={MeImage} />
                    </Div>
                    <p className='mb-2' style={{ fontStyle: 'italic', fontSize: '15px' }}>By Daniel Arevalo / 05 April 2021</p>
                    <div className='mb-2' style={{ borderBottom: '1px solid black', width: '100%' }}/>
                    <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '20px' }}>Format releases a new tool that enables direct video hosting</h3>
                    <p className='h-article' style={{ fontStyle: 'italic', fontSize: '15px', paddingBottom: '10px', lineHeight: '1.5' }}>Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.
                    Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.
                    Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                </Div>
            </Div>
        </Div>
    )
}

export default Article;