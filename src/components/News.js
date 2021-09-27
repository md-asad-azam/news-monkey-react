import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7"
        let response = await fetch(url);
        let data = await response.json();
        // Always use setState to change the value of a state
        this.setState({ articles: data.articles })
    }

    render() {
        return (
            <div className="container my-3">
                <div className="row">

                    {this.state.articles.map((element) => (
                        <div key={element.url} className="col-md-4">
                            <NewsItem
                                title={element.title ? element.title : ""}
                                desc={element.description ? element.description : ""}
                                url={element.url}
                                urlToImg={element.urlToImage ? element.urlToImage : "https://images.livemint.com/img/2021/09/27/600x338/415be322-4602-11eb-bc1d-4bfe13e32b0e_1608858841050_1608858879986_1632705127019.jpg"}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button type="button" class="btn btn-dark">&larr; Previous</button>
                    <button type="button" class="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
