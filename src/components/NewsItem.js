import React from 'react'

const NewsItem = (props) => {
    
    
        let {title, description, imgUrl, newsUrl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card">
  <img src={!imgUrl?"https://www.plasticstoday.com/sites/plasticstoday.com/files/styles/article_featured_retina/public/FTR-Breaking-News-AdobeStock_397269312.jpg?itok=eZwalMlV":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="badge rounded-pill bg-warning text-dark">{source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-info">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark" style={{backgroundColor:'#7952b3'}}>Read More</a>
  </div>
</div>  
            </div>
        )
    
}

export default NewsItem
