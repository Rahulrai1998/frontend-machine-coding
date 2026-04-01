import React, { useEffect, useState } from "react";
import styles from "./JobBoard.module.css";
//problem-desc (greatfrontend): https://www.greatfrontend.com/questions/user-interface/job-board?practice=practice&tab=coding

const API_URL = "https://hacker-news.firebaseio.com";
const ITEMS_PER_PAGE = 6;

const example = {
  by: "jamilbk",
  id: 35908337,
  score: 1,
  time: 1683838872,
  title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/firezone/jobs",
};

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    //THIS IS CUSTOM IMPLEMENTATION OF Promise.all([]) usecase. FINISH THIS!!!
    const fetchJobList = async () => {
      try {
      } catch (error) {}
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/v0/jobstories.json`);
        if (!response.ok) throw new Error(`Error occurred: ${response.status}`);
        const data = await response.json();
        setJobIds(data);

        //use data rather jobsIds array here, bcause react async behaviour.
        //Promise.all([]) returns a promise with resolve the array of resolved values.
        /* Write a custom function to handle the Promise.all() usecase */

        //
        const listChunk = data?.slice(
          currentPage * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
        );

        const jobList = await Promise.all(
          listChunk?.map((dt) => {
            const temp = fetch(`${API_URL}/v0/item/${dt}.json`).then((a) =>
              a.json(),
            );
            console.log(temp);
            return temp;
          }),
          //let a = Promise.then(d=>d): a will hold a promise with pending state, which will eventually resolve to d which is returned in then() block.

          // data?.map(async (jobId) => {
          //   const dt = await fetch(`${API_URL}/v0/item/${jobId}.json`);
          //   return await dt.json();
          // }),
        );
        // if (jobList.length < ITEMS_PER_PAGE) setShowLoadMoreBtn(false);
        setJobs([...jobs, ...jobList]);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  // console.log(jobIds);
  // console.log(jobs);

  if (loading && (!jobs || jobs.length === 0)) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!jobs || (jobs.length === 0 && !loading)) return <p>No data!!</p>;

  //derived states for loading and show loadmore button
  const loadingMore = loading && jobs.length !== 0;
  const showLoadMoreBtn = !(
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE >=
    jobIds.length
  );

  return (
    <div className={styles.parentContainer}>
      <h1>Job Board</h1>
      <div className={styles.jobList} role="list">
        {jobs &&
          jobs?.map((job) => (
            <div className={styles.jobPosting} key={job.id} role="listitem">
              {" "}
              <JobPosting job={job} />
            </div>
          ))}
      </div>
      {showLoadMoreBtn && (
        <button
          className={styles.loadMoreBtn}
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={loadingMore} //EDGE CASE: while loading more list items the button needs to be non-clickable otherwise the event-handle will get trigerred unnecessarily.
        >
          {loadingMore ? "Loading..." : "Load more"}
        </button>
      )}
      Page: {currentPage + 1}
    </div>
  );
};

export default JobBoard;

const JobPosting = ({ job }) => {
  const { title, by, time, url, id } = job;
  return (
    <>
      <p>
        <a href={url} target="_blank" rel="noopener">
          {title}
        </a>
      </p>
      <p>
        By {by} <span className={styles.dot}></span>
        {/*getting time into seconds, hence *1000 */}
        {new Date(time * 1000).toLocaleString()}
      </p>
    </>
  );
};

/*
Key Pointers to focus.
1. Calling multiple apis.
2. Leveraging Promise.all() aggregator for parallel multiple network calls.
3. Pagination: list items chunking respective to current page.
4. target="_blank": vulnerability and fix
*/
