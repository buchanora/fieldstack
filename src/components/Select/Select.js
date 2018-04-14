import  React, {Component} from 'react';
import {SelectBox, SelectListItem, SelectOption} from './common';

export default class SelectFieldSet extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        dropdownVisible: false
      }
  
      this._handleDropdownTriggerClick = this._handleDropdownTriggerClick.bind(this);
      this._handleDropdownOptionClick = this._handleDropdownOptionClick.bind(this);
      this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    render(){
      const { name = '',
              disabled = false,
              selection={},
              type = 'select-box',
              value = '',
              style='box',
              options = [],
              onChange = ()=>{},
              onSubmitEditing = ()=>{},
              label = '',
              required = false  } = this.props;
              // console.log(selection);
  
  
      const optionList = options.map( (option, index)=>{
        // console.log(option.value);
        if (style==='dropdown'){
          return (<SelectListItem    key={`check-${index}`}
                                    checkerType='sphere'
                                    value={option.value}
                                    disabled={disabled}
                                    checked={selection[option.value]? true: false}
                                    parent={name}
                                    content={option.name}
                                    onChange={this._handleDropdownOptionClick.bind(null, option)}/>)
        }
        if(style==='button'){
            return (<SelectBox  key={`check-${index}`}
                                  checkerType='sphere'
                                  value={option.value}
                                  iconClass={option.iconClass}
                                  disabled={disabled}
                                  checked={selection.value === option.value ? true : false}
                                  parent={name}
                                  name={option.name}
                                  onChange={onChange.bind(null, option)}/>)
        }
        return (<SelectOption    key={`check-${index}`}
                                checkerType='sphere'
                                value={option.value}
                                disabled={disabled}
                                checked={selection[option.value] ? true : false}
                                parent={name}
                                name={option.name}
                                onChange={onChange.bind(null, option)}/>)
      });
  
      function renderField(style, dropdownVisible, handleDropdownTriggerClick){
        if (style === 'dropdown'){
          return(
            <div>
  
              { !dropdownVisible 
                ? (<div onClick={handleDropdownTriggerClick}>
                    <span className='select-field'>{value || 'Not Selected'}</span>
                    <span className='select-caret icofont icofont-rounded-down'></span>
                  </div>)
                : optionList
              }
  
            </div>
          )
        }
  
        return optionList
      }
  
      return (
        <fieldset className={`select-group ${style==='dropdown' ?'select-list' :'select-grid'}`}>
          <legend className='select-label'>{label}</legend>
          {renderField(style, this.state.dropdownVisible, this._handleDropdownTriggerClick)}
        </fieldset>
      );
  
    }
    _handleDropdownTriggerClick(){
      this.toggleDropdown()
    }
    _handleOptionClick(value, event){
  
      this.props.onChange(value);
      this.props.style === 'dropdown' && this.toggleDropdown()
    }
    _handleDropdownOptionClick(value, event){
  
      this.props.onChange(value);
      this.toggleDropdown()
    }
    toggleDropdown(){
      this.setState((curState)=>{
        return {
          dropdownVisible: !curState.dropdownVisible,
        }
      })
    }
  }