import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Form/Button/Button'

describe('Button component', () => {
  let container,
    onClick,
    clickButton

  beforeEach(() => {
    onClick = jest.fn()
    container = render(
      <Button
        className="mt-1"
        disabled={false}
        onClick={onClick}>
          Click Me
      </Button>
    )
    clickButton = () => fireEvent.click(container.getByRole('button'))
  })

  describe('button is passing down to function', () => {
    beforeEach(() => {
      clickButton()
    })

    it('should have called a function', () => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
