import React, { Component } from 'react'

export default class CounterCC extends Component {

    constructor() {
        super()
        this.state = { counter: 0 }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.resetCounter = this.resetCounter.bind(this)
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    resetCounter() {
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <h3>{this.state.counter}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </>
        )
    }
}
