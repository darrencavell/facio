import React from 'react';
import { render } from '@testing-library/react';
import Title from '../../components/Typography/Title/Title';

describe('Title component', () => {
  let container
  beforeEach(() => {
    container = render(
      <Title>Trip Lists</Title>
    )
  })

  describe('render perfectly without flaws', () => {
    it('render with test inside', () => {
      expect(container.getByText('Trip Lists'))
    })
  })
})