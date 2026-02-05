import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //A flag to prevent state updates if the component unmounts during the fetch due to any reason.
    let isMounted = true;

    // it will cancel/abort the API call when component unmounts during fetch api calling which prevents memory leaks and errors.
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        //1. fetch() will not reject in case of HTTP status codes like
        //400, 403, 500
        //Fetch API only throws an error for network errors
        //like, DNS failure, network down, CORS errors)
        //not for successful HTTP status codes (i.e, 404, 500 )
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal },
        );

        //2. checks if the response HTTP status is ok (200-299 range)
        //due to 1, we need to handle the HTTP status codes explicitly and throw error which is then caught in catch block.
        if (!response.ok) {
          //this will lead to catch block in case of http status code error.
          throw new Error(`HTTP error: ${response.status}`);
        }

        //if status code is ok, parse the data as JSON and proceed.
        const data = await response.json();
        if (isMounted) {
          setData(data);
          setError(null); //clears any previous error
        }
      } catch (error) {
        if (isMounted) {
          console.log(error);
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    //delay api call to show the loading state.
    setTimeout(() => {
      fetchData();
    }, 5000);

    //cleanup function to set the flag false, if the componenet unmounts.
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []); //the empty dependency array ensures this runs once when the component mounts.

  // edge cases handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <div>No Data</div>;

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data && data?.slice(0, 10)?.map((post) => <div>{post?.body}</div>)}
    </div>
  );
};

export default FetchData;

/*

AbortController(): it is a JS Web API interface that allows to abort/cancel one or more asynchronous tasks, such as fetch requests, event listeners, on demand when required.
- it stops unneccessary operations, save bandwidth and prevent errors when component unmounts.

controller.signal: An AbortSignal object associated with the controller passed to the asynchronous task.
controller.abort: a method called to signal that the task should be terminated.

*/
