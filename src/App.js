import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import "./styles/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ASSETS_QUERY } from "./config/ASSETS_QUERY";
import { GetRoutes } from "./config/routes";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master",
        ASSETS_QUERY
      );
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("rerender1");

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <div className="App">
            <GetRoutes data={data} />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
