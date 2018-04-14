import React from 'react';
import TextField from '../TextField/'

export default function TimeField (props) {

  return(
          <TextField  type='time' placeholder='_ _ : _ _  AM' {...props}/>
  );
}
