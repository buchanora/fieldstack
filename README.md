# Overview

Fieldstack is a [ReactJS](https://facebook.github.io/react) component library for building beautiful, flexible, highly interactive & robust form-based interfaces.

## Installation
```npm install --save fieldstack```

## Basic Example
```
  import React, {Component} from 'react';
  import {FieldStack} from 'fieldstack';

  class SampleForm extends Component{
    state: {
      values: {}
    }
    render(){
      const actions = {
        onChange: this.handleChange
      }
      return(
        <FieldStack formData={formData}
                    values={this.state.values}
                    actions={actions}/>
      );
    }
    handleChange(fieldName, event){
      this.setState(currentState=>({
        values: {
          [fieldName]: event.target.value,
          ...currentState.values
        }
      }))
    }
  }

  formData: {
    formTitle: 'Login Form',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        secure: false,
        keyboard: 'email-address',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        secure: true,
        keyboard: 'default',
      },
      {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        secure: true,
        keyboard: 'default',
      }
    ]
  }
```
> See [Fieldstack](#fieldstack) Component documentation 
>for a more advanced example

# Components

## [Fieldstack](#fieldstack)
<!--- ### Example --->

### Props

#### activeFieldIndex
> `number` | defaults to null

#### actions
> `object` | defaults to `{}`

#### disabledForm
> `boolean` | defaults to `false`

#### disabledFields
> `object` | defaults to `{}`

#### formData
> `object` | defaults to `null`

#### fieldErrors
> `object` | defaults to `{}`

#### formError
> `string` | defaults to `null`

#### render
> `function(options: object)` | defaults to `null`

#### values
> `object` | defaults to `{}`



## [TextField](#textField)
<!--- ### Example --->

### Props

#### className
> `string` | defaults to `""`

#### disabled
> `boolean` | defaults to `false`

#### error
> `string` | defaults to `null`

#### expand
> `boolean` | defaults to `false`

#### id
> `string` | defaults to `""`

#### label
> `string` | defaults to `""`

#### name
> `string` | defaults to `null`

#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### SubmitEditing
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onKeyDown
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onKeyUp
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseEnter
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseLeave
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### required
> `bolean` | defaults to `false`

#### type
> `string` | defaults to `""`

#### uncollapse
> `bolean` | defaults to `false`

#### values
> `object` | defaults to `{}`

## [DateField](#DateField)
## [TimeField](#timeField)

## [MultiLineField](#MultiLineField)

## [DraftField](#DraftField)

## [FieldGroup](#FieldGroup)
## [OptionTextField](#OptionTextField)
## [RangeSelect](#RangeSelect)
## [Select](#Select)
## [SelectButton](#SelectButton)
## [SuggestionField](#SuggestionField)
## [UploadField](#UploadField)


## License
MIT

<!---## Utilities
## Styles --->



