import React from 'react';
import { render } from '@testing-library/react';
import Facio from '../../components/Facio/Facio'

describe('Facio component', () => {
  let container

  beforeEach(() => {
    container = render(
      <Facio />
    )
  })

  describe('render perfectly without flaws', () => {
    it('has a FAVIO text on it', () => {
      expect(container.getByText('FACI'))  
      expect(container.getByText('O'))
    })
  })
})