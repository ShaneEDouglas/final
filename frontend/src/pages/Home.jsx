import React, { useState, useEffect } from 'react'
import Topbar from '../components/topbar'
import NewsList from '../components/Newslist'
import axios from 'axios'


const Home = () => {

  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const fetchArticles = (params) => {
    axios.get('http://localhost:5000/news', { params })
      .then(response => {
        if (response.data && response.data.articles) {
          setArticles(response.data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setArticles([]); 
      });
  };

  useEffect(() => {
    
    const params = {
      pageSize: 20,  
      page: page,    
    };

    if (searchTerm) {
      params.q = searchTerm;  
     
    } else if (category) {
      params.category = category;
    
      
    }

    if (!searchTerm && !category) {
      delete params.page;
    }
    console.log("Fetching Articles with Params:", params);
    fetchArticles(params);  
  }, [searchTerm, category,page]);




  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (newCategory) => {
    setSearchTerm('');
    setSearchTerm(newCategory); 
    setCategory(newCategory);
  };




  return (
    <div className="home">
     
      <Topbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <NewsList articles={articles}/>

      </div>
  )
}

export default Home