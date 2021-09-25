import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, desc } = this.props

        return (
            <div>
                <div className="card" style={{width: "18rem;"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{title}</h5>
                    <p class ="card-text">{desc}</p>
                    <a href="/" class ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
