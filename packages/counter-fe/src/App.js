import React, { Component } from 'react'
import Counter from 'counter'
import { Count, IncButton, DecButton } from 'components'

let init = 0
let counter = new Counter(init)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { value: init }
  }

  inc () {
    counter.increment()
    this.setState({ value: counter.value })
  }

  dec () {
    counter.decrement()
    this.setState({ value: counter.value })
  }

  render () {
    let { value } = this.state
    return (
      <div>
        <Count value={value} />
        <IncButton onInc={() => this.inc()} />
        <DecButton onDec={() => this.dec()} />
      </div>
    )
  }
}

export default App
