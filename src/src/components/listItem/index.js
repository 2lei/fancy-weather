import React, { Component } from "react"
import './index.css'

const Item = (data) => {
    if (!Object.keys(data).length) {
        return false
    }
    const item = data.data
    return (
        <div className = "item">
            <span className="desc"> {item.name }： </span>
            <span className="value"> {item.value } </span>
        </div>
    )
}

export default Item