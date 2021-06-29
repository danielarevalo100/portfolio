import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


/* components */
import Div from 'components/Div';

/* managers */
import Notifications from 'managers/Notifications'
import User from 'managers/User'

/* styles */
import './styles.scss';


const passLength = 6;
const numbers = [1,2,3,4,5,6,7,8,9,0];

const Access = (props) => {

  /* states */
  const [pass, setPass] = useState('')
  const [wrongPass, setWrongPass] = useState(false)

  /* effects */
  useEffect(() => {
    if(wrongPass){
      setTimeout(() => {
        setWrongPass(false)
      }, 500);
    }

  }, [wrongPass]);

  /* actions */
  const repeat = (times) => {

    const array = [];
    for( let i=0; i<times; i++ ){
      array.push(i);
    }
    return array;

  }
  /* handlers */
  const handlePassChange = ( num ) => {

    const currentPass = pass + num;
    setPass(currentPass);
    if( currentPass.length == passLength ) {

      /* make the api call for auth */
      if( currentPass == '123456' ) {

        User.current.initialize({ auth: true, name: 'userName' })
        Notifications.post('USER_IS_AUTH')
        props.history.push('/')

      } else {
        console.log('wrong pass')
        setWrongPass(true)
        setPass('')
      }
    }

  }

  return(
    <Div className='access-container'>
      <Div><h1>App name</h1></Div>
      <Div className={`pass-indicator ${wrongPass && 'shake' || ''}`} row>
        {repeat(passLength).map((index) => <Div className={`rounded-indicator ${index < pass.length && 'active'}`}/>)}
      </Div>
      <Div className='numpad' row wrap>
        {numbers.map(num => <Button onClick={() => handlePassChange(num)}>{num}</Button>)}
      </Div>
    </Div>
  )

}

export default Access;
