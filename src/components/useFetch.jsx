import React from "react";
import { useState, useEffect } from "react";

// const url = "https://course-api.com/javascript-store-products";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const answer = await resp.json();
    setData(answer);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { loading, data };
}
