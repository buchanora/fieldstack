# Overview

Fieldstack is the most robust [ReactJS](https://facebook.github.io/react) component library for building beautiful, flexible & highly interactive form-based interfaces.

## Installation
```npm install --save fieldstack```

## Basic Usage
### Formdata API Example
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

  const formData = {
    formTitle: 'Signup Form',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
      {
        name: 'website',
        label: 'Company Website',
        type: 'url',
      },
      {
        name: 'about',
        label: 'Company Bio',
        type: 'multiLineText',
      },
      {
        name: 'regDate',
        label: 'Registration Date',
        type: 'date',
      },
      {
        name: 'time',
        label: 'Office Resumption Time',
        type: 'time',
      },
      {
        name: 'industry',
        label: 'Industry',
        type: 'optionText',
        options: [
          'Automobile',
          'Building',
          'Cosmetics',
          'Eduction',
        ]
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
      },
      {
        name: 'accountType',
        label: 'Account Type',
        type: 'selectFieldSet',
        options: [
          {value:'savings', name: 'Saving Account'},
          {value:'current', name: 'Current Account'},
          {value:'escrow', name: 'Escrow Account'},
          {value:'dom', name: 'Dom Account'},
        ]
      },
      {
        name: 'addon',
        label: 'Addon Features',
        type: 'multiSelectFieldSet',
        options: [
          {value:'social', name: 'Social Banking'},
          {value:'lifestyle', name: 'Lifestyle Banking'},
          {value:'mobile', name: 'Mobile Banking'}
        ]
      },
    ]
  }
```
### Render Prop API Example
```
  import React, {Component} from 'react';
  import {FieldStack, TextField, MultiLineField, FieldRow} from 'fieldstack';

  class SampleForm extends Component{
    state: {
      values: {}
    }
    render(){
      const actions = {
        onChange: this.handleChange.bind(this)
      }
      return(
        <FieldStack values={this.state.values}
                    actions={actions}
                    render={({values, actions, fieldErrors, disabledFields, disabledForm})=>{
                        return(
                            <div>
                              <FieldRow>
                                <TextField  label='First Name'
                                            value={values.firstName}
                                            onChange={actions.onChange.bind(null, 'firstName', )}/>
                                <TextField  label='Last Name'
                                            value={values.lastName}
                                            onChange={actions.onChange.bind(null, 'lastName', )}/>
                                <TextField  label='Email'
                                            value={values.email}
                                            onChange={actions.onChange.bind(null, 'email')}/>
                                <TextField  label='Phone Number'
                                            value={values.phone}
                                            onChange={actions.onChange.bind(null, 'phone')}/>
                              </FieldRow>
                              <MultiLineField   label='Bio'
                                                value={values.aboutMe}
                                                onChange={actions.onChange.bind(null, 'aboutMe', )}/>
                            </div>
                          )
                    }}/>
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
```

## Components

### [Fieldstack](#fieldstack)
<!--- ### Example --->

#### Props
```
  activeFieldIndex: PropTypes.number,
  actions: PropTypes.object.isRequired,
  disabledForm: PropTypes.bool,
  disabledFields: PropTypes.object,
  formData: PropTypes.object,
  fieldErrors: PropTypes.object,
  formError: PropTypes.string,
  render: PropTypes.func,
  values: PropTypes.object
```



### [TextField](#textField)
### [DateField](#DateField)
### [TimeField](#timeField)
<!--- ### Example --->

#### Props

```
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  expand: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  uncollapse: PropTypes.bool,
  value: PropTypes.string
```

### [OptionTextField](#OptionTextField)
#### Props
```
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  expand: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  type: PropTypes.string,
  uncollapse: PropTypes.bool,
  value: PropTypes.string
```

### [MultiLineField](#MultiLineField)
#### Props
```
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
  label: PropTypes.string,
  required: PropTypes.bool,
  uncollapse: PropTypes.bool,
  expand: PropTypes.bool,
  size: PropTypes.number
```

<!-- ### [DraftField](#DraftField)
#### Props
```
  value: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  editorState: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  uncollapse: PropTypes.bool,
  expand: PropTypes.bool,
  handleKeyCommand: PropTypes.func
``` -->

### [FieldRow](#FieldRow)
#### Props
```
  uncollapse: PropTypes.bool
```

<!-- ## [RangeSelect](#RangeSelect) -->
### [SelectFieldSet](#SelectFieldSet)
### [MultiSelectFieldSet](#MultiSelectFieldSet)
#### Props
```
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expand: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
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
  style: PropTypes.oneOf(['checkList', 'buttonGrid'])
```


<!-- ## [SelectButton](#SelectButton) -->
<!-- ## [SuggestionField](#SuggestionField) -->
### [UploadField](#UploadField)
#### props
```
  disabled: PropTypes.bool,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  showIcon: PropTypes.bool
```

## Styles

Fieldstack relies on SCSS for styling. Be sure to import the library's style sheets into your application's SCSS.

### Sass Import
With Webpack and Sass-loader:
```
@import '~fieldstack/lib/style_config'
@import '~fieldStack/lib/default_theme';
@import '~fieldstack/lib/base_styles';
```
`~` refereces node_modules directory

### Theming/Customisation
To customize theme colors, fonts etc, copy the contents of `fieldstack/lib/style_config.scss` and override the variable values in it with your custom values.



## Development
* To run FieldStack locally
* Clone the repo
* `npm install`
* `npm run storybook`
* Visit localhost:9001

## Contibution
* To build distribution run `npm run build`
* Run `npm test` for test



## License
MIT

<!---## Utilities
## Styles --->



