import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, desc, url, urlToImg, author, publitionDate, source } = this.props

        return (
            <div className="my-3">
                <div className="card">
                    <span style={{left: "50%", zIndex: "1"}} className="position-absolute top-0 translate-middle badge rounded-pill bg-success">
                        {source}
                    </span>
                    <img src={urlToImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="text-muted sm">
                            <small>By {author ? author : "UnKnown"} on {new Date(publitionDate).toGMTString()}</small>
                        </p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
