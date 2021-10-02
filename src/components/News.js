import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            pageSize: 10,
            loading: false,
            page: 1, 
        }
    }

    capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    async componentDidMount() {
        document.title = "News Monkey | " + this.capitalize(this.props.category);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        this.props.setProgress(10);
        let response = await fetch(url);
        this.props.setProgress(30);
        let data = await response.json();
        this.props.setProgress(70);
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d98a9e355d3f4580bdf4f04b815ccbf7&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>You have reached to the end of this category</b>
                        </p>
                    }
                >
                    <div className="container row">
                        {this.state.articles.map((element) => (
                            <div key={element.url} className="col-md-4">
                                <NewsItem
                                    title={element.title ? element.title : ""}
                                    desc={element.description ? element.description : ""}
                                    url={element.url}
                                    urlToImg={element.urlToImage ? element.urlToImage : "https://images.livemint.com/img/2021/09/27/600x338/415be322-4602-11eb-bc1d-4bfe13e32b0e_1608858841050_1608858879986_1632705127019.jpg"}
                                    author={element.author}
                                    publitionDate={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
