import React, {Component} from 'react';

function Provider(ChildComponent){
    class P extends Component{
        constructor(props){
            super(props);
            this.state = {
                values: {},
                fieldErrors: {},
                formError: ''
            }
            this.handleChange = this.handleChange.bind(this)
            
        }
        render(){
            let childProps = {
                onChange: this.handleChange,
                values: this.state.values,
                fieldErrors: this.state.filedErrors,
                formError: this.state.formError
            };
            
            return <ChildComponent {...childProps}/>
        }
        handleChange(name, event){
            const value = event.target? event.target.value : event;
            
            this.setState(cur=>({
                values: {...cur.values, [name]: value}
            }))
        }
    }
    return P;
}

export default Provider;