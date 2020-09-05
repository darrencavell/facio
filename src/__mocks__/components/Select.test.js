import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../../components/Form/Select/Select';

describe('Select component', () => {
  let container,
    setValue,
    clickOption

  beforeEach(() => {
    setValue = jest.fn()
    container = render(
      <Select
        block
        objkey="status"
        setValue={setValue} 
        data={{
          PENDING: 'Pending',
          STARTED: 'Started',
          COMPLETED: 'Completed'
        }} />
    )
    clickOption = () => fireEvent.change(container.getByRole('combobox'))
  });

  describe('click function trigger function calls', () => {
    beforeEach(() => {
      clickOption('Pending')
    })
    it('should have the updated value', () => {
      expect(setValue).toHaveBeenCalledTimes(1)
    })
  })
  

  describe('it display the exact value', () => {
    it('as the one selected', () => {
      expect(container.getByDisplayValue('Pending'))
    })
  })
})
