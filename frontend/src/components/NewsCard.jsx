import React from 'react'


const NewsCard = ( {article} ) => {

  return (
    <div className="news-card">
      
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-image" />
      )}

      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <button className="read-more-btn" onClick={() => window.open(article.url, "_blank")}>Go to Article</button>
      </div>
        
        
    </div>
  )
}

export default NewsCard