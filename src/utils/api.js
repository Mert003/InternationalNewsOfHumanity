const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${endpoint}`); // Update the path accordingly
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error fetching data for ${endpoint}:`, error);
      throw error;
    }
  };
  
  export default fetchData;