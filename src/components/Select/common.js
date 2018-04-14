import  React from 'react';


export function SelectOption(props){

    const { disabled,
            checkerType,
            value,
            name,
            parent,
            checked,
            onChange } = props;
  
    const disabledStateClass = disabled && 'select-option-disabled';
    const checkedStateClass = checked && 'select-option-checked';
    return(
      <span     className={`select-option ${checkedStateClass} ${disabledStateClass}`}
                onClick={disabled || onChange}>
  
          <Checker style={checkerType} checked={checked} disabled={disabled}/>
          {name}
  
      </span>
    )
  }
  
  export function SelectBox(props){
  
    const { disabled,
            checkerType,
            value,
            name,
            iconClass,
            parent,
            checked,
            onChange} = props;
  
    const disabledStateClass = disabled? 'select-button-disabled' : '';
    const checkedStateClass = checked? 'select-button-checked' : '';
  
    return(
      <span     className={`select-button ${checkedStateClass} ${disabledStateClass} `}
                onClick={disabled || onChange}>
  
          <i className={iconClass}></i>
          {name}
  
      </span>
    );
  
  }
  export function SelectListItem(props){
  
    const { disabled,
            checkerType,
            content,
            parent,
            checked,
            onChange} = props;
  
    const disabledStateClass = disabled && 'select-list-item-disabled';
    const  checkedStateClass = checked && 'select-select-list-checked';
  
    return(
      <div     className={`select-list-item ${checkedStateClass} ${disabledStateClass}`}
               onClick={disabled || onChange}>
  
          <span className='select-list-item-checker'>
            <Checker style={checkerType} checked={checked} disabled={disabled}/>
          </span>
  
          <span className='select-list-item-content'>
            {content}
          </span>
  
      </div>
    );
  
  }
  
  export function Checker(props){
    const { disabled,
            onChange,
            checked=false,
            style='sphere' } = props;
  
    const disabledStateClass = disabled && 'checker-disabled';
    const checkedStateClass = checked && 'checker-checked';
  
    function setStyleClass(style, checked){
      if(style==='tick'){
        return checked? 'checker-box icofont icofont-check' :'checker-box icofont icofont-close';
      }
      if(style==='sphere'){
        return checked? ' checker-sphere checker-sphere-checked' :'checker-sphere checker-sphere-checked';
      }
    }
  
    return(
      <span  className={`checker ${checkedStateClass} ${disabledStateClass} ${setStyleClass(style, checked)}`}
              onClick={_handleCheckedStateChange.bind(null, checked)}>
      </span>
    );
    function _handleCheckedStateChange(checkedState){
      if(onChange){
        onChange(!checkedState);
      }
    }
  
  }
  