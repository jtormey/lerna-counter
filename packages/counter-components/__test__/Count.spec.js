import React from 'react'
import Count from '../src/Count'
import { render } from 'enzyme'

describe('Count', () => {
  it('should render a value', () => {
    let wrapper = render(
      <Count value={9} />
    )
    expect(wrapper.toString()).toMatchSnapshot()
  })
})
