import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import elasticsearch from "elasticsearch";


import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  // const url ='http://localhost:9200/products/_search';
  // const username = 'elastic';
  // const password = 'Password';

  
  const fetchData = (value) => {
    var requestOptions = {
      method: 'GET',
      mode: 'no-cors'
    };
    
    return fetch("http://localhost:9200/products/_search/", requestOptions)
      .then(response => {
        console.log(response);
        const temp = response.text();
        console.log(temp);
        return temp;
      })
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
    // fetch('http://localhost:9200/products/_search', {
    //   method:'GET', 
    //   mode: 'no-cors',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(res => {console.log(res.json())})
    // .then(response => {
    //   console.log(response);
    // });
   
      
      // .then((json) => {
      //   const results = json.filter((products) => {
      //     return (
      //       value &&
      //       products &&
      //       products.title &&
      //       products.title.toLowerCase().includes(value)
      //     );
      //   });
      //   setResults(results);
      // });
 };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    // const client = new elasticsearch.Client({
    //   host: 'http://localhost:9200',
    //   });
    //    client.search({
    //     index: 'products/_search',
    //     Authorization :{
    //       username : 'elastic',
    //       password :'Password'
    //     } ,
    //     query: {
    //       match: { quote: value }
    //     }
    //   }).then(response => response.json())
    //    
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};