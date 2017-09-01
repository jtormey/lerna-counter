
class Counter {
  constructor (value) {
    this._value = value
  }

  get value () {
    return this._value
  }

  static of (value) {
    return new Counter(value)
  }

  static increment (counter) {
    return new Counter(counter.value + 1)
  }

  static decrement (counter) {
    return new Counter(counter.value - 1)
  }
}

export default Counter
