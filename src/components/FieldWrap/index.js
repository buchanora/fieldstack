import React from 'react';
import PropTypes from 'prop-types';

export default function FieldWrap (props) {

  const {   children, 
            className,
            focused,
            onFocus,
            onBlur,
            id, 
            error, 
            label, 
            name, 
            dirty, 
            uncollapse, 
            expand  } = props;
  

  return(
      <span  className={`field-wrap ${className} ${dirty ? 'field--dirty' : '' } ${focused ? 'field--focus': ''} ${error? 'field--error': ''} ${uncollapse ?'field--uncollapse' :''} ${expand ?'field--expand' :''}`}
            onFocus={onFocus}
            onBlur={onBlur}
            tabIndex='0' 
            id={id}>

          {children}

          <label  className={`field-label`}
                  htmlFor={name}>
              {error || label}
          </label>
      </span>
  );

}

FieldWrap.defaultProps = {
    className: 'field',
}

FieldWrap.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    focused: PropTypes.bool,
    dirty: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.onBlur
}
