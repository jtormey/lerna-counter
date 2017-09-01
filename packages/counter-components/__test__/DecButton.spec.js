import React from 'react'
import DecButton from '../src/DecButton'
import { render, mount } from 'enzyme'

describe('DecButton', () => {
  it('should render a button', () => {
    let wrapper = render(
      <DecButton />
    )
    expect(wrapper.toString()).toMatchSnapshot()
  })

  it('should trigger an increment', () => {
    let mockFn = jest.fn()
    let wrapper = mount(
      <DecButton onDec={mockFn} />
    )
    wrapper.find('button').simulate('click')
    expect(mockFn.mock.calls.length).toEqual(1)
  })
})
