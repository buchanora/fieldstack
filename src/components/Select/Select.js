import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectButton, CheckListItem, SelectOption} from './common';

export default class SelectFieldSet extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        dropdownVisible: false
      }
  
      this._handleOptionClick = this._handleOptionClick.bind(this)
      
    }
    render(){
      const { disabled,
              selection,
              style,
              multiple,
              options,
              onChange,
              label } = this.props;

      function getStyle(_style){
        let newStyle = _style;
        if(_style === 'button'){
          newStyle = 'buttonGrid'
        }
        if(_style === 'dropdown' || _style === 'list'){
          newStyle = 'checkList'
        }
        return newStyle;
      }

      const selectStyle = getStyle(style);
  
      const optionList = options.map( (option, index)=>{

        let _checked;
        if(multiple){
          _checked = _selections=>{
            return _selections[option.value]? true : false;
          }
        }else{
          _checked = _selection=>{
            return _selection.value === option.value ? true : false;
          };  
        }

        const checked = _checked(selection);
        
        switch (selectStyle) {
          case 'checkList':
            return (
              <CheckListItem  key={`check-${index}`}
                              checkerType='tick'
                              disabled={disabled}
                              checked={checked}
                              label={option.label || option.name}
                              onChange={onChange.bind(null, option)}/>
            );
          case 'buttonGrid':
            return (
              <SelectButton   key={`check-${index}`}
                              iconClass={option.iconClass}
                              disabled={disabled}
                              checked={checked}
                              label={option.label || option.name}
                              onChange={onChange.bind(null, option)}/>
              );
          default:
            return (
              <SelectOption   key={`check-${index}`}
                              disabled={disabled}
                              checked={checked}
                              label={option.label || option.name}
                              onChange={onChange.bind(null, option)}/>
            );
        }
      })
  
      return (
        <fieldset className={`select-group ${(selectStyle !== 'buttonGrid') ?'select-list' :'select-grid'}`}>
          <legend className='select-label'>{label}</legend>
          {optionList}
        </fieldset>
      );
  
    }
    _handleOptionClick(value){
      this.props.onChange(value);
    }
  }

SelectFieldSet.defaultProps = {
    disabled: false,
    label: 'Select Field Set',
    options: [],
    selection: {},
    onChange: ()=>{}
}

SelectFieldSet.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    expand: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      iconClass: PropTypes.string
    })),
    selection: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        iconClass: PropTypes.string
      }), 
      PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        iconClass: PropTypes.string
      }))
    ]),
    style: PropTypes.oneOf(['checkList', 'buttonGrid', 'button', 'dropdown']),
}