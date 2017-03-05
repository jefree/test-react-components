import jasmineEnzyme from 'jasmine-enzyme';

import React from 'react'
import { shallow } from 'enzyme'

import HelloWorld from '../src/hello_world'

describe('<HelloWorld />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('works', () => {
    const wrapper = shallow(<HelloWorld/>)
    expect(wrapper).toBeDefined()
  })
})
