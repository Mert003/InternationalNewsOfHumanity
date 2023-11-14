import React , {useEffect,useState} from 'react';
import "./ThreeColumnsComponents.css";
import axios from "axios";

export default function ThreeColumnsComponents(props) {

    const[News,setNews] = React.useState([]);
  
    useEffect(()=>{
        axios
        .get( "https://newsapi.org/v2/everything?q="+props.topic+"&language=en&apiKey=11bc37735ba94370b95485b14ac159b3")
        .then((response)=>
        setNews(response.data.articles.filter((article)=>article.urlToImage!==null&&article.title.length<60&&article.urlToImage.match(/\.(jpeg|jpg|png)$/))))
        .catch((error)=>console.log(error));
    },[]);
    

  return (
   
    <div className='ThreeComponentcontainer'>
       {(News[0] && News[1] && News[2] && News[3] && News[4]) && (
         <div className='TCCfirstcolumn'>
            {News.slice(0,5).map((article)=>(
                
                <div key={article.title} className='TCcolumns'>
                    <h3>{article.title}</h3>
                </div>
            
            
            ))}
         </div>
    )}

        {News[5] &&  (
         <div key={News[5].title} className='TCCsecondcolumn'>
            <img src={News[5].urlToImage} />
            <div className='TCCsecondcolumntexts'>
            <h1>{News[5].title}</h1>
            <p>{News[5].description}</p>
            </div>
         </div>
    )}

{(News[6] && News[7] && News[8] && News[9] && News[10]) && (
         <div className='TCCthirdcolumn'>

            {News.slice(5,10).map((article)=>(
                
                <div key={article.title} className='TCcolumns'>
                    <h3>{article.title}</h3>
                </div>
            
            
            ))}

         </div>
    )}
        
    </div>

    
      
  )
}
