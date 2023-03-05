import React, { useEffect, useState } from 'react'
import data from '../news.json'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


function Newsdetails(props) {

  const { id } = useParams();
  const [newss, setNewss] = useState(null);

  // useEffect(() => {
  //   fetch("../news.json")
  //     // .then((response) => response.json())
  //     // .then((data) => {
  //     //   const news = data.find((news) => news.id === parseInt(id));
  //     //   setNews(news);
  //     //   console.log(data)
  //     // });
  //     .then(response => response.json())
  //     .then(data =>{ 
  //       const news = data.find((news) => news.id === parseInt(id));
  //       setNews(data)
      
      
  //     })
  //     .catch(error => console.log(error));
      
  //   }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../news.json');
      const data = await response.json();
      const newss = data.find(newss => newss.id === id);
      setNewss(newss);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      
      <p>hiil</p>
    </div>
  )
}

export default Newsdetails
