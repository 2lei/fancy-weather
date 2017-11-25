import React, { Component } from 'react'
import List from '../contentList/'
import './index.css'
class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const res = this.props.response && this.props.response.data ? this.props.response.data.HeWeather6[0] : ''
        const text = JSON.stringify(res)
        return (
            <div className="all-in-one">
                <div className="day-wrap">
                    <h2>今天天气预报</h2>
                    <List res = { res } />
                </div>
                <div className="day-wrap">
                    <h2>明天天气预报</h2>
                    <List res={res} />
                </div>
                <div className="day-wrap">
                    <h2>后天天气预报</h2>
                    <List res={res} />
                </div>
            </div>
        )
    }
}

export default Content