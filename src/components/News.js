import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            pageSize: 10, //by default we set the no of articles in one page to 10
            loading: false,
            page: 1,    //initially we are on the first page
        }
    }

    async componentDidMount() {
        // page size is given in the url
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7&page=1&pageSize=${this.state.pageSize}`
        this.setState({loading: true})
        let response = await fetch(url);
        let data = await response.json();
        // Always use setState to change the value of a state
        this.setState({ 
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false 
        })
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
        this.setState({loading: true})
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ 
            articles: data.articles,
            page: this.state.page - 1,
            loading: false
         })
    }
    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
        this.setState({loading: true})
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ 
            articles: data.articles,
            page: this.state.page + 1,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => (
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
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page === (Math.ceil(this.state.totalResults / this.state.pageSize))} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
