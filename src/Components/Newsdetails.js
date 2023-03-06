import React, { useEffect, useState } from 'react'
import data from '../news.json'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {newsData} from '../Newsdata';


function Newsdetails(props) {

  const { id } = useParams();
  const [news, setNews] = useState(null);

  
  useEffect(() => {
    let news = newsData.find((news) => news.id === parseInt(id));
    if (news) {
      setNews(news);
    }
    
  }, []);

  return (
    <div>
      <>
      
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

      <Link to='/'>
         <span className='text-blue-500 '>Go Back</span>
      </Link>
      {news ? (
        <div className='news-wrap flex flex-col justify-center items-center space-x-11'>
          <header>
            <h1 className='text-3xl font-bold text-gray-900 py-11'>{news.heading}</h1>
          </header>
          <div >
          <img classname='object-cover w-28 h-48 rounded-sm' src={news.image} alt='cover' />
          </div>
          <p className='news-desc  py-11'>{news.description}</p>
        </div>
      ) : (
        <h1>404 not found</h1>
      )}
      </div>
    </>
    </div>
  )
}

export default Newsdetails
