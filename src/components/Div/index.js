import React from 'react';

const Div = (props) => {

  const defaultStyle = {
    display: props.display || 'flex',
    justifyContent: props.justify || 'center',
    alignItems: props.align || 'center',
    flexDirection: props.row && 'row' || 'column',
    flexWrap: props.wrap && 'wrap' || 'nowrap',
  }

  props.style = { ...defaultStyle, ...props.style };

  return(
    <div {...props}>
      {props.children}
    </div> 
  )

}

export default Div;
