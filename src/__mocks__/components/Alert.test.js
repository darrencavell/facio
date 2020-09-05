import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../components/Form/Alert/Alert';

describe('Alert component', () => {
  let container
  
  beforeEach(() => {
    container = render(
      <Alert condition="error">Your email or password is incorrect</Alert>
    )  
  })

  describe('should render perfectly fine', () => {
    it('render with provided text', () => {
      expect(container.getByText('Your email or password is incorrect'))
    })
  })
})