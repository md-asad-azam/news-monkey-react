import React from 'react'
import gif from "./ajax-loader.gif";
export default function Spinner() {
    return (
        <div className="text-center">
            <img src={gif} alt="loading..." />
        </div>
    )
}
