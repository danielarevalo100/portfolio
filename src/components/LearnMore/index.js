import React from 'react';

/* components */
import Div from 'components/Div';

/* assets */
import MeImage from 'assets/me.jpg'

/* styles */
import './styles.scss'

const LearnMore = () => {
    return(
        <Div className='article-container'>
            <Div className='article-content'>
                <Div className='w-100' style={{ padding: '3rem' }} align='start'>
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
                        <h3 className='mb-2' style={{ color: '#000000', fontWeight: '700', fontSize: '18px' }}>Lenguague Skills</h3>
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