import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalresults, setTotalresults] = useState(0)

    const update = async () => {
        let a = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d69fdaa14f8b4b929f9576c11e10b79b&page=${page}&pagesize=${props.pagesize}`;
        let b = await fetch(a)
        let c = await b.json()
        setArticles(c.articles)
        setTotalresults(c.totalresults)
    }
    useEffect(()=>{
        update();
    })
    const previous=()=>{
        setPage(page-1)
        update();
    }
    const next=()=>{
        setPage(page+1)
        update();
    }
    return (
        <>
            <div className="container my-3">
                <h3 className="text-center">INDIA Articles - Top {props.category} Headlines</h3>
                <div className="row my-3">
                    {articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem title={element.title} description={element.description} url={element.url} imageurl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" onClick={previous} className="btn btn-dark"> &larr; Previous</button>
                    <button type="button" onClick={next} className="btn btn-dark">Next &rarr;</button>
                </div>

            </div>

        </>
    );

}
News.defaultProps = {
    country: "in",
    category: "general",
    pagesize: 9
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}