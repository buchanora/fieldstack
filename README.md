# Overview

> WARNING!!! This library is undergoing active prerelease development. Please check back daily for feature/documentation updates & bug fixes.

Fieldstack is the most robust [ReactJS](https://facebook.github.io/react) component library for building beautiful, flexible & highly interactive form-based interfaces.

## Installation
```npm install --save fieldstack```

## Styles

Fieldstack relies on SCSS for styling. Be sure to import the library's style sheets into your application's Scss.

### Sass Import
```
@import '~fieldstack/lib/style_config'
@import '~fieldStack/lib/default_theme';
@import '~fieldstack/lib/base_styles';
```
>To customize theme colors, fonts etc, copy `style_config.scss` and replace the values in it with your custom values.

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
        onChange: this.handleChange.bind(this)
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
    formTitle: 'Signup Form',
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
      name: 'industry',
      label: 'Industry',
      type: 'option-text',
      secure: false,
      keyboard: 'default',
      options: [
        {name:'auto', value: 'auto'},
        {name:'chemical', value: 'chemical'},
        {name:'building', value: 'building'},
        {name:'electronics', value: 'electronics'},
      ]
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      secure: false,
      keyboard: 'numeric',
    },
    {
      name: 'description',
      label: 'Company Brief',
      type: 'multiline-text',
      secure: false,
      keyboard: 'default',
    },
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



