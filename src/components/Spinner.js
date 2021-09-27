import React, { Component } from 'react'
import gif from "./ajax-loader.gif";
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={gif} alt="loading..." />
            </div>
        )
    }
}
