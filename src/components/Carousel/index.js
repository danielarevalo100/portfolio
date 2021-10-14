import React from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import MeImage from 'assets/me.jpg'
import Close from 'assets/close.svg'

/* styles */
import './styles.scss'

const Carousel = (props) => {
    return(
        <Div className='slider'>
            <ul>
                <li></li><img src={MeImage} ></img>
                <li></li><img src={Close}></img>
                <li></li><img src={MeImage}></img>
                <li></li><img src={Close}></img>
            </ul>
        </Div>
    )
}

export default Carousel;