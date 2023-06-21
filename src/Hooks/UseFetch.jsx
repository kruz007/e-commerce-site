import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let fetchData = async () => {
    try {
      setLoading(true);
      let fetchRequest = await fetch(url);
      let response = await fetchRequest.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading };
};

export default UseFetch;
