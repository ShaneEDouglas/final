import React,  { useEffect, useRef } from 'react'
import NewsCard from './NewsCard'

const Newslist = ( {articles}) => {

  
  return (
    <div className="news-column">
    {articles.map((article, index) => (
      <NewsCard key={index} article={article} />
    ))}
  </div>
);   
}

export default Newslist