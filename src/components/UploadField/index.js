import React from 'react';
import {PropTypes} from 'prop-types'

export default function UploadField (props) {

  const { name = '',
          icon,
          showIcon,
          disabled = false,
          onChange = ()=>{},
          label = '',
          multiple = false,
          required = false  } = props;

  const isRequired = required && true;

  return(
      <div className='uploadField-wrap'>

          <label  className={icon || showIcon ? 'upload-icon': 'upload-label'}
                  htmlFor={name}>
                { 
                        label
                        ? <span className='uploadField'>
                                <i className='icofont icofont-camera'></i>
                                {label}
                          </span>
                        : <i className='icofont icofont-camera'></i>
                }
               
          </label>

          <input  name={name}
                  id={name}
                  disabled={disabled}
                  type='file'
                  className='upload-field'
                  multiple={multiple}
                  required={isRequired}
                  onChange={onChange} />
      </div>
  );

}

UploadField.propTypes = {
        disabled: PropTypes.bool,
        label: PropTypes.string,
        multiple: PropTypes.bool,
        name: PropTypes.string,
        onChange: PropTypes.func,
        required: PropTypes.bool,
        showIcon: PropTypes.bool
}
