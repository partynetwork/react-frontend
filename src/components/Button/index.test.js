import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Test <Button/> Component', () => {
  test('It can be render with child text', () => {
    const wrapper = shallow(<Button>My Button</Button>)
    expect(wrapper.props().children).toEqual('My Button')
  })

  test('Default theme color is default', () => {
    const wrapper = shallow(<Button>My Button</Button>)
    expect(wrapper.props().color).toEqual('default')
  })
})
