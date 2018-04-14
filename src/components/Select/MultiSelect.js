import  React, {Component} from 'react';
import {SelectBox, SelectListItem, SelectOption} from './common';

export default class MultiSelectFieldSet extends Component{
    constructor(props){
      super(props);
    }
  
    componentWillMount(){
      const {options=[], values={}} = this.props;
      let optionState = {};
      options.forEach((option)=>{
        optionState[option.name] = values[option.name] || false
      })
      this.setState(optionState)
      // console.log(values);
    }
    componentWillReceiveProps(newProps){
      let options = {};
      // console.log(newProps)
      for (let value in newProps.values){
        options[newProps.values[value]] = true
      }
      this.setState(options)
    }
  
    _handleCheckStateChange = (optionValue)=>{
      this.setState((curState)=>({
        [optionValue]: !curState[optionValue]
      }))
      this.props.onChange(optionValue)
      // console.log(optionValue);
    }
    render(){
      const { name = ' ',
              disabled = false,
              style='check', //one of check, dropdown or button
              values={},
              options = [],
              onChange = ()=>{},
              onSubmitEditing = ()=>{},
              label = ' ',
              required = false  } = this.props;
  
      const optionList = options.map( (option, index)=>{
        // console.log(this.state[option.value]+ ' for '+option.name)
        if(style==='dropdown'){
            return (<SelectListItem  key={`check-${index}`}
                                    checkerType='tick'
                                    value={option.value}
                                    disabled={disabled}
                                    checked={this.state[option.name]}
                                    parent={name}
                                    content={option.value}
                                    onChange={this._handleCheckStateChange.bind(null, option.name)}/>)
        }
        if(style==='button'){
            return (<SelectBox     key={`check-${index}`}
                                  checkerType='tick'
                                  value={option.value}
                                  iconClass={option.iconClass}
                                  disabled={disabled}
                                  checked={this.state[option.name]}
                                  parent={name}
                                  name={option.name}
                                  onChange={this._handleCheckStateChange.bind(null, option.name)}/>)
        }
        return(
          <SelectOption     key={`check-${index}`}
                            checkerType='tick'
                            value={option.value}
                            disabled={disabled}
                            checked={this.state[option.name]}
                            parent={name}
                            name={option.name}
                            onChange={this._handleCheckStateChange.bind(null, option.name)}/>
        );
      })
      return (
        <fieldset className={`select-group ${style==='dropdown' ?'select-list' :'select-grid'}`}>
          <legend className='select-label'>{label}</legend>
          {
            optionList
          }
        </fieldset>
      );
    }
  
  }