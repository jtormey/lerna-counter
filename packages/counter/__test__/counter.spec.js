import Counter from '../index.js'

describe('Counter', () => {
  it('should initialize with a value', () => {
    let counter = Counter.of(5)
    expect(counter.value).toEqual(5)
  })

  it('should increment', () => {
    let counter = Counter.of(5)
    counter = Counter.increment(counter)
    expect(counter.value).toEqual(6)
  })

  it('should decrement', () => {
    let counter = Counter.of(5)
    counter = Counter.decrement(counter)
    expect(counter.value).toEqual(4)
  })
})
