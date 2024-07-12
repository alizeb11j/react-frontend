import React, { useEffect, useState } from "react";
// import jobs from "../jobs.json"
import JobListing from "./Joblisting";
const JobList = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/users"
        "http://localhost:8000/api/items/"
      );
      const result = await response.json();
      console.log("result ", result);
      setitems(result);
    };
    getData();
    
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      {items.length > 0 && (
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <JobListing key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default JobList;
