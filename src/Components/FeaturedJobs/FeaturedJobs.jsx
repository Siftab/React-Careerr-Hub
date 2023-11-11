import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs,setJob]=useState([]);
    const [dataLength,SetDataLength]=useState(4);
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
                jobs.slice(0,dataLength).map(job=><Job  key={job.id} job={job}></Job>)
            }</div>
            <button className={`bg-[#7E90FE] p-4 m-4 text-white rounded-md ${dataLength ===jobs.length? 'hidden':''}`} onClick={()=>SetDataLength(jobs.length)}>Show All </button>
        </div>
    );
};

export default FeaturedJobs;