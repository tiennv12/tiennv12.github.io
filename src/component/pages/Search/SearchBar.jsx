import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import elasticsearch from "elasticsearch";


import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  
  const fetchData = (keyword) => {
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "query": {
            "fuzzy": {
              "title": {
                "value": keyword
              }
            }
          }
        }
      )
    };

    return fetch("https://test-es.lthoang.com/products/_search", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response) {
          var data = response["hits"]["hits"];
          return data;
        }
        return [];
      })
      .then((data) => {
        setResults(data);
      });
 };

  const handleChange = async (value) => {
    setInput(value);
<<<<<<< HEAD
    await fetchData(value);
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
=======
    fetchData(value);
>>>>>>> 4ede402e20fdbf38ae75194d3e2c299fb005d0fa
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