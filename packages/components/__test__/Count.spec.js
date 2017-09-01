import React from 'react'
import Count from '../src/Count'
import renderer from 'react-test-renderer'

describe('Count', () => {
  it('should render a value', () => {
    let tree = renderer.create(
      <Count value={9} />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
