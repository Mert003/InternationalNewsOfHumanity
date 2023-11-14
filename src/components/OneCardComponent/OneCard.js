import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./OneCard.css";


export default function OneCard(props) {
  const [News, setNews] = useState([]);
  useEffect(() => {
    axios
    .get(
      `https://newsapi.org/v2/everything?q=${props.topic}&apiKey=11bc37735ba94370b95485b14ac159b3`
    )
    .then((response) => {
      // Update the articles state variable with the list of article
      setNews(response.data.articles.filter((article)=>article.urlToImage!==null && article.description.length>150 &&article.urlToImage.match(/\.(jpeg|jpg|png)$/)))  
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    


      <div className="container my-4">
        
      <div className="row">
      { News[0] ? (
          <div key={News[0].url} className="col-12">
            <div className="card h-100" id='OneCard'>
              <img src={News[0].urlToImage} className="card-img-top" id='OneCardImg' alt={News[0].title} />
              <div className="card-body">
                <h5 className="card-title">{News[0].title}</h5>
                <p className="card-text">{News[0].description}</p>
              </div>
            </div>
          </div>
      ):null}
      </div>
    
    </div>

   
  );

}
