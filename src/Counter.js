import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


class Counter extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        )
    }
}





export default inject('counter')(observer(Counter))