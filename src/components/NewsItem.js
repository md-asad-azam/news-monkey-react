import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, desc, url, urlToImg } = this.props

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={urlToImg} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{desc}</p>
                    <a rel="noreferrer" href={url} target="_blank" className ="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
