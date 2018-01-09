import React from 'react'
import { shallow } from 'enzyme'

import Nav from './Nav'

describe('Nav', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Nav {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})