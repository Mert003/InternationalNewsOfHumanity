import React, { useState, useEffect } from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./EditorPicks.css";
import {TbHexagon1Filled,TbHexagon2Filled,TbHexagon3Filled,TbHexagon4Filled,TbHexagon5Filled,TbHexagon6Filled} from "react-icons/tb";

const EditorPicks = (props) => {
    const [Enews,setEnews]=React.useState([]);
    const article=[];
    useEffect(() => {
        axios
          .get(
            "https://newsapi.org/v2/everything?q="+props.topic+"&language=en&apiKey=11bc37735ba94370b95485b14ac159b3"
          )
          .then((response) => setEnews(response.data.articles.filter((article)=>article.urlToImage!==null &&article.title.length<50 &&article.urlToImage.match(/\.(jpeg|jpg|png)$/))))
      
          .catch((error) => console.log(error));
      }, []);
      
  return (
 
    <div className='EPContainer'>
        { Enews[0]&&(
        <div className='EPLeftSection'>
        <img className="EP-image" src={Enews[0].urlToImage} alt={Enews[0].title} />
         <div className="EP-content">
            <h2 className="EP-title">{Enews[0].title}</h2>
            <p className="EP-description">{Enews[0].description}</p>
           
        </div>
         </div>
    )}

{ Enews[1]&& (
        <div className='EPRightSection'>
          
      <div className='EPheader'>  <h2>Latest Popular News</h2></div>
            <ul>
                <li><TbHexagon1Filled /> <h3> {Enews[1].title}</h3></li>
                <li><TbHexagon2Filled /> <h3> {Enews[2].title}</h3></li>
                <li><TbHexagon3Filled /> <h3> {Enews[3].title}</h3></li>
                <li><TbHexagon4Filled /> <h3> {Enews[4].title}</h3></li>
                <li><TbHexagon5Filled /> <h3> {Enews[5].title}</h3></li>
            </ul>
        </div>

)}
      
    </div>
  )
};

export default EditorPicks
