import React from 'react'
import { shallow } from 'enzyme'

import ProjectVue from './ProjectVue'

describe('ProjectVue', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ProjectVue {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})