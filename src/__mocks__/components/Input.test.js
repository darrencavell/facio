import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/Form/Input/Input';

describe('Input component', () => {
  let container,
    setValue,
    changeEmailInput

  beforeEach(() => {
    setValue = jest.fn()
    container = render(
      <Input
        block
        className="mt-1"
        objkey="email"
        type="text"
        setValue={setValue}
        placeholder="Email" />
    )
    changeEmailInput = value => fireEvent.change(container.getByPlaceholderText('Email'), { target: { value }})
  })

  describe('text typed in input component', () => {
    beforeEach(() => {
      setValue()
    })

    it('should have triggered onChange', () => {
      expect(setValue).toHaveBeenCalledTimes(1)
    })
  })

  describe('should set value on input', () => {
    beforeEach(() => {
      changeEmailInput('darren@mail.com')
    })
    
    it('has equal value', () => {
      const input = container.getByPlaceholderText('Email')
      expect(input.value).toBe('darren@mail.com')
    })
  })

})
