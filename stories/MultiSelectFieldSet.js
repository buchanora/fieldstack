import React from 'react';
import { storiesOf } from '@storybook/react';
import {MultiSelectFieldSet} from '../src/index';
import Provider from '../.storybook/Provider';


export default storiesOf('Multi-Select Field Set ', module)
  .add('As Checker', () => (
    <AsChecker/>
  ))
  .add('As Button', () => (
    <AsButton/>
  ))
  .add('As Dropdown', () => (
    <AsDropdown/>
  ))

  const options = [
    {
      value: 'opt1',
      name: 'Option One',
      iconClass: ''
    },
    {
      value: 'opt2',
      name: 'Option Two',
      iconClass: ''
    },
    {
      value: 'opt3',
      name: 'Option Three',
      iconClass: ''
    },
  ];

  const AsChecker = Provider((props)=>{

    return(
      <MultiSelectFieldSet  label='My Date Field'
                            name='date'
                            selection={props.values.date}
                            onChange={props.onChange.bind(null, 'date')}
                            options={options}/>
    );
  });

  const AsButton = Provider((props)=>{

    return(
      <MultiSelectFieldSet  label='My Date Field'
                            name='date'
                            selection={props.values.date}
                            onChange={props.onChange.bind(null, 'date')}
                            options={options}
                            style='buttonGrid'/>
    );
  });

  const AsDropdown = Provider((props)=>{

    return(
      <MultiSelectFieldSet  label='My Date Field'
                            name='date'
                            selection={props.values.date}
                            onChange={props.onChange.bind(null, 'date')}
                            options={options}
                            style='checkList'/>
    );
  });