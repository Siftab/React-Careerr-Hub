import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs,setJob]=useState([]);
    useEffect(()=>{
        fetch('/public/jobs.json')
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[]);
    console.log(jobs)
    return (
        <div className=" text-2xl p-4">
            <h1>jobs length:{jobs.length} </h1>
           <div className="grid grid-cols-2 gap-5"> {
                jobs.map(job=><Job  key={job.id} job={job}></Job>)
            }</div>
        </div>
    );
};

export default FeaturedJobs;