import React, { Component } from 'react'
import Counter from 'counter-core'
import { Count, IncButton, DecButton } from 'counter-components'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: Counter.of(0) }
  }

  inc () {
    let { counter } = this.state
    this.setState({ counter: Counter.increment(counter) })
  }

  dec () {
    let { counter } = this.state
    this.setState({ counter: Counter.decrement(counter) })
  }

  render () {
    let { counter } = this.state
    return (
      <div>
        <Count value={counter.value} />
        <IncButton onInc={() => this.inc()} />
        <DecButton onDec={() => this.dec()} />
      </div>
    )
  }
}

export default App
