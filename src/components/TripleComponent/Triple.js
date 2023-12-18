import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Triple.css";

import fetchData from "../../utils/api";


function Triple(props) {
  const [news, setNews] = useState([]);

/*   useEffect(() => {
    axios
    .get(
      `https://newsapi.org/v2/everything?q=${props.category}&language=en&sortBy=popularity&apiKey=11bc37735ba94370b95485b14ac159b3`
    )
    .then((response) => {
      // Update the articles state variable with the list of articles
     setNews(response.data.articles.filter((article)=>article.urlToImage!==null && article.description.length<170 && article.description.length>90 && article.urlToImage.match(/\.(jpeg|jpg|png)$/)))
      
    })
    .catch((error) => {
      console.log(error);
    });
  }, []); */

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchData(`https://newsapi.org/v2/everything?q=${props.category}&language=en&sortBy=popularity&apiKey=11bc37735ba94370b95485b14ac159b3`); // Pass the specific endpoint
        setNews(data.articles);
      } catch (error) {
        // Handle errors
      }
    };
    fetchNewsData();
  }, []);

  return (
    <div className="container ">
      <div className="row">
        {news.slice(3, 6).map(article => (
          <div key={article.url} className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

        }
export default Triple;
