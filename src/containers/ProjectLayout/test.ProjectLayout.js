import React from 'react'
import { shallow } from 'enzyme'

import ProjectLayout from './ProjectLayout'

describe('ProjectLayout', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ProjectLayout {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})