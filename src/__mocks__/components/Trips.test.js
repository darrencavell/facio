import React from 'react';
import { render } from '@testing-library/react';
import Trip from '../../components/Trip/Trip';

describe('Trip component', () => {
  let container

  beforeEach(() => {
    const t = {
      "start_station": "Surabaya",
      "end_station": "Semarang",
      "eta": "2020-08-20 00:00:00",
      "status": "Transit",
      "driver_name": "John Doe",
      "created_at": "2020-08-18 17:12:00",
      "_id": "5f521f25d899cd03e8b4de79"
    }
    container = render(
      <Trip key={t._id} data={t} />
    )
  })

  describe('render perfectly without flaws', () => {
    it('should render with driver name', () => {
      expect(container.getByText('John Doe'))
    })
    it('should render with start and end station', () => {
      expect(container.getByText('Surabaya - Semarang'))
    })
  })
})