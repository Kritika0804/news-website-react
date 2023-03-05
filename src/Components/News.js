import React, { useState, useEffect } from 'react';
import New from '../news.json'
import { Link } from 'react-router-dom';

const News = () => {


  

  const [news, setNews] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

 

  useEffect(() => {
    fetch('../news.json')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.log(error));
      
  }, );

  return (
    <div className="grid gap-10 lg:grid-cols-3 px-10 ">
      {New.map((a, key) => (
        
        <div className="w-full rounded-lg shadow-md lg:max-w-sm px-5 py-10 bg-slate-100" key={key}>
                        <img
                            className="object-cover w-full h-48 rounded-sm"
                            src={a.image}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {a.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {a.heading}
                            </p>
                            {/* <a  className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </a> */}
                            <Link className="link text-blue-500" to={`/newsdetails`} >Read more</Link>
                        </div>
                        <div>
                        
                        </div>
                    </div>
      ))}
    </div>
  );
};

export default News;

{/* <div key={index} className="flex flex-col md:flex-row md:space-x-4 md:items-center mb-4 justify-center">
          <div className="flex-shrink-0">
            <img className="w-48 h-32 object-cover object-center" src={article.image} alt={article.title} />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-medium">{article.title}</h2>
            <p className="text-gray-500 text-sm">{article.date}</p>
            <p className="mt-2">{article.description}</p>
          </div>
        </div> */}