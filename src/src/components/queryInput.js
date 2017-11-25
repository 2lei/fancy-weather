import React, { Component } from 'react';
import api from '../api/index'

/* eslint-disable */
class QueryInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    async handleSubmit() {
        console.log(1)
        const value = this.state.value
        const url = this.props.value
        const data = await api.get(url, {
            params: {
                cityId: 'beijing'
            }
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} placeholder="select the city you want query"/>
                <input type="submit" value="查询" onClick={this.handleSubmit} />
                <p>
                    { this.state.value ? this.state.value : 'click to query!!!' }
                </p>
                
            </div>
        )
    }
}
export default QueryInput