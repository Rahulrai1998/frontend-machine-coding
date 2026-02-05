import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);
    
  }, [data, loading, error]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <div>No Data</div>;
  return (
    <div>
      {data && data?.slice(0, 6)?.map((post) => <div>{post?.body}</div>)}
    </div>
  );
};

export default FetchData;
