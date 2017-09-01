import Counter from '../index.js'

describe('Counter', () => {
  it('should initialize with a value', () => {
    let counter = new Counter(5)
    expect(counter.value).toEqual(5)
  })

  it('should increment', () => {
    let counter = new Counter(5)
    counter.increment()
    expect(counter.value).toEqual(6)
  })

  it('should decrement', () => {
    let counter = new Counter(5)
    counter.decrement()
    expect(counter.value).toEqual(4)
  })
})
