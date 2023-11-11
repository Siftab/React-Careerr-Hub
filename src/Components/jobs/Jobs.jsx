import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { getStoredApplications, savedJobApplication } from '../../Utility/LocalStorage';

const Jobs = () => {
    const [appliedJob, setAppliedJobs] = useState([]);
    const [displayFilteredJobs,setDisplayFilteredJobs]=useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobId = getStoredApplications();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
            // console.log(jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayFilteredJobs(jobsApplied);
        }

    }, []);
    console.log(appliedJob)
    const handleFilter=filter=>{
        if(filter === 'All'){
            setDisplayFilteredJobs(appliedJob);
        }
        else if(filter === 'Remote'){
                const remote= appliedJob.filter(job=> job.remote_or_onsite ==='Remote');
                setDisplayFilteredJobs(remote)
        }
        else if(filter === 'Onsite'){
                const onsite= appliedJob.filter(job=> job.remote_or_onsite ==='Onsite');
                setDisplayFilteredJobs(onsite)
        }
    }
    return (
        <div>
           <div className="flex justify-end"> <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleFilter('All')}><a>All</a></li>
                    <li onClick={()=>handleFilter('Remote')}><a>Remote</a></li>
                    <li onClick={()=>handleFilter('Onsite')}><a>OnSite</a></li>
                </ul>
            </details></div>
            many many jobs dayt{appliedJob.length}
            <div className='space-y-4'>
                {
                    displayFilteredJobs.map(job => <div className='border border-red-600 py-10' key={job.id}><h1 className='ml-6 text-2xl'>{
                        job.job_title
                    }</h1>
                    <p>{job.remote_or_onsite}</p></div>)
                }
            </div>
        </div>
    );
};

export default Jobs;