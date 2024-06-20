import React from 'react'

export default function Newsitem(props) {
        let { title, description, url, imageurl, author, date,source } = props ;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageurl ? "https://ichef.bbci.co.uk/news/1024/branded_news/F7A3/production/_133159336_ba46506645ba76960f537ce197be83595ee82517-1.jpg" : imageurl} className="card-img-top" alt="google" />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}....</p>
                        <p className='card-text'><small className='text-muted'>by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} rel="noreferrer" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}
