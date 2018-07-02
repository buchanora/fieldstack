import  React, {Component} from 'react';
import Select from './Select'

export default class MultiSelectFieldSet extends Component{
    constructor(props){
      super(props);
      this.state = {};
      this._handleCheckStateChange = this._handleCheckStateChange.bind(this)
      
    }
  
    _handleCheckStateChange = (option)=>{
      const selections = this.state;
      if(selections[option.value]){
        delete selections[option.value];
      }else{
        selections[option.value] = option
      }
      this.setState(()=>selections);
      this.props.onChange(selections);
    }
    render(){
      return (
        <Select {...this.props} multiple  onChange={this._handleCheckStateChange} selection={this.props.selection || this.state}/>
      );
    }
  
  }