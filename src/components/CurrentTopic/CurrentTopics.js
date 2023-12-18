import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Carousel } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./CurrentTopics.css";
import fetchData from "../../utils/api";

function BusinessCarousel() {
  const [articles, setArticles] = useState([]);

/*   useEffect(() => {
    // Make API request to NewsAPI to get the list of business news articles
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=general&sortBy=relevancy&apiKey=11bc37735ba94370b95485b14ac159b3`
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchData( `https://newsapi.org/v2/top-headlines?country=us&category=general&sortBy=relevancy&apiKey=11bc37735ba94370b95485b14ac159b3`); // Pass the specific endpoint
        setArticles(data.articles);
      } catch (error) {
        // Handle errors
      }
    };
    fetchNewsData();
  }, []);


  return (
    <Container className="mb-4">
      <Carousel interval={5000} fade={true}>
        {articles.filter((article)=>article.urlToImage!==null && article.urlToImage.match(/\.(jpeg|jpg|gif|png)$/)).slice(0, 7).map((article) => (

         

            
          <Carousel.Item key={article.title}>
            <Card className="bg-dark text-white">
              <Card.Img src={article.urlToImage} alt={article.title} />
        
              <Carousel.Caption>
                
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                  <br />
                  <small className="text-muted">
                    {new Date(article.publishedAt).toLocaleString()}
                  </small>
                </Card.Text>
                
                </Carousel.Caption>
              
            </Card>
          </Carousel.Item>
         
        ))}
      </Carousel>
    </Container>
  );
}

export default BusinessCarousel;
