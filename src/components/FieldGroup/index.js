import React from 'react';
import {PropTypes} from 'prop-types';

export default function FieldRow (props) {

  return(
      <div className={`fieldGroup ${props.uncollapse? 'fieldGroup--uncollapsed' : ''}`}>
        {props.children}
      </div>
  );

}

FieldRow.propTypes = {
  uncollapse: PropTypes.bool
}
