import React from 'react'
import { shallow } from 'enzyme'

import Portfolio from './Portfolio'

describe('Portfolio', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Portfolio {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})