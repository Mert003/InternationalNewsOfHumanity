import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./News.css";

const News=(props)=>{
    const [News,setNews]=React.useState([]);
    const article=[];
    useEffect(() => {
        axios
          .get(
            "https://newsapi.org/v2/everything?q="+props.topic+"&apiKey=11bc37735ba94370b95485b14ac159b3"
          )
          .then((response) => setNews(response.data.articles.filter((article)=>article.urlToImage!==null && article.urlToImage.match(/\.(jpeg|jpg|png)$/))))
          .catch((error) => console.log(error));
      }, []);

      return(    
        
    <div className="news-triple-container">

{ News[0] ? (
        
      <div className="news-triple-left">
      <img className="news-image" src={News[0].urlToImage} alt={News[0].title} />
      <div className="news-content">
            <h2 className="news-title">{News[0].title}</h2>
            <p className="news-description">{News[0].description}</p>
           
          </div>
      </div> 
     
    
     ) : ( console.log())}

      <div className="news-triple-innercontainer">

      { News[1]&&(
            
      <div className="news-triple-right">
      <img className="news-image" src={News[1].urlToImage} alt={News[1].title} />
      <div className="news-content">
            <h4 className="news-title">{News[1].title}</h4>
           
          </div>
      </div> 
      )}
      
      {News[2]&&(
      <div className="news-triple-right">
      <img className="news-image" src={News[2].urlToImage} alt={News[2].title} />
      <div className="news-content">
            <h4 className="news-title">{News[2].title}</h4>
          
          </div>
      </div>
      )}

      </div>

    </div>
      );
};
export default News;