import React from 'react';
import { render } from '@testing-library/react';
import Subtitle from '../../components/Typography/Subtitle/Subtitle';

describe('Subtitle component', () => {
  let container

  beforeEach(() => {
    container = render(
      <Subtitle>Driver Name</Subtitle>
    )
  })

  describe('render perfectly without flaws', () => {
    it('render with text inside', () => {
      expect(container.getByText('Driver Name'))
    })
  })
})