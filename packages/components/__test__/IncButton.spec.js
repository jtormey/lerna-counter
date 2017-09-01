import React from 'react'
import IncButton from '../src/IncButton'
import { render, mount } from 'enzyme'

describe('IncButton', () => {
  it('should render a button', () => {
    let wrapper = render(
      <IncButton />
    )
    expect(wrapper.toString()).toMatchSnapshot()
  })

  it('should trigger an increment', () => {
    let mockFn = jest.fn()
    let wrapper = mount(
      <IncButton onInc={mockFn} />
    )
    wrapper.find('button').simulate('click')
    expect(mockFn.mock.calls.length).toEqual(1)
  })
})
