import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // await fetch("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => res.json())
      //   .then((json) => setData(json))
      //   .catch((err) => {
      //     console.log(err);
      //   });
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []); // once

  const filteredData = data.filter((el) => {
    return el.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  });

  return (
    <div>
      <center>
        <p>You searched for : {query}</p>
        <input
          type={"text"}
          placeholder="type here to search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {filteredData.length === 0 ? (
          <h1>Data not found</h1>
        ) : (
          filteredData.map((value) => {
            return <p key={value.id}>{value.name}</p>;
          })
        )}
      </center>
    </div>
  );
};

export default App;
