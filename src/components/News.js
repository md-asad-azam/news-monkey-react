import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {


    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(999)
    // const [loading, setLoading] = useState(false)
    // we do not require it when we are using infiniteScroll

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])
    // this comment eslint... is used so that there is no warning on console to enter values in thatempty array which we are passing

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    async function fetchData() {
        document.title = "News Monkey | " + capitalize(props.category);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(10);
        let response = await fetch(url);
        props.setProgress(30);
        let data = await response.json();
        props.setProgress(70);
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1) //this is async func therefore we will fetch the same news again if we put it before url
        let response = await fetch(url);
        let data = await response.json();
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
    }


    return (
        <div className="container my-3">
            <div style={{marginTop: "60px"}}></div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>You have reached to the end of this category</b>
                    </p>
                }
            >
                <div className="container row">
                    {articles.map((element) => (
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

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
