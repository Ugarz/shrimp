import React from 'react'
import { shallow } from 'enzyme'

import Project from './Project'

describe('Project', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Project {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})