import { Component } from 'react';
export default class DigitalClock extends Component {

    constructor() {
        super()
        this.state = { currentTime : this.getTime()}
        this.tick = this.tick.bind(this)
    }

    getTime() {
        return  new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
         this.setState({ currentTime : this.getTime() })
    }
    
    render() {
        return (
            <>
                <h2>Digital Clock</h2>
                <h3>{this.state.currentTime}</h3>
            </>
        )
    }
}