import React from 'react';
import PropTypes from 'prop-types';

export default function TextField (props) {

  const {   name,
            disabled,
            type,
            value,
            error,
            id,
            className,
            onChange,
            onSubmitEditing,
            onKeyDown,
            onKeyUp,
            onBlur,
            onFocus,
            onMouseEnter,
            onMouseLeave,
            label,
            required,
            uncollapse,
            expand  } = props;
  

  return(
      <span  className={'textField-wrap' + `${className} ${value ? 'textField--dirty' : '' } ${error? 'textField--error': ''} ${uncollapse ?'textField--uncollapse' :''} ${expand ?'textField--expand' :''}`}
            tabIndex='0' 
            id={id}>

          <input  name={name}
                  disabled={disabled}
                  type={type}
                  className='textField-input'
                  onChange = {onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onKeyDown={onKeyDown}
                  onKeyUp={onKeyUp}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSubmit = {onSubmitEditing}
                  value = {value}
                  required={required} />

          <label  className={`textField-label`}
                  htmlFor={name}>
              {error || label}
          </label>
      </span>
  );

}

TextField.defaultProps = {
    className: '',
    onChange: ()=>{},
    onSubmitEditing: ()=>{},
    onKeyDown: ()=>{},
    onKeyUp: ()=>{},
    onBlur: ()=>{},
    onFocus: ()=>{},
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{},
}
TextField.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    label: PropTypes.bool,
    required: PropTypes.bool,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool
}
