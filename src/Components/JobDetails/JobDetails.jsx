import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from '../../Utility/LocalStorage';

const JobDetails = () => {
    
    const notify = () => toast("you Applied for this !", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const jobs= useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job=>job.id === parseInt(id))
   
    console.log(job)
    const {job_title,salary,contact_information,job_description,job_responsibility,educational_requirements,experiences}=job;
    return (
        <div>
            <h1 className='text-red-700 font-bold text-5xl text-center'>JOb details {id}</h1>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className='md:col-span-3 border space-y-5'>
                    <p><span className='font-bold'>Job Description:</span>{job_description}</p>
                    <p> <span className='font-bold'>Job Responsibility:</span>{job_responsibility}</p>
                    <p><span className='font-bold'>Educational Requirments: </span><br />{educational_requirements}</p>
                    <p> <span className='font-bold'>experiences:</span> <br />
                    {experiences}</p>
                </div>
                <div className='md:col-span-1 border'>
                    <div className='bg-[#7E90FE1A] p-8'>
                    <h1 className="text-xl font-bold mb-4">Job details</h1>
                    <hr />
                    <p>Salary :{job_title}</p>
                    <p>Job Title:{salary}</p>
                    <hr />
                    <p className='text-xl font-bold mb-4'>Contact Information</p>
                        <hr />
                        <p>phone: {contact_information.phone}</p>
                        <p> email: {contact_information.email}</p>
                        <p>Adress: {contact_information.address}</p>
                    </div>
                    <button className='w-full bg-[#7E90FE] p-4 rounded-md text-white mt-4' onClick={()=>{notify ();savedJobApplication(parseInt(id))}}>Apply now</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;