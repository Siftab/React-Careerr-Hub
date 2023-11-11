
import { CiLocationOn,CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
           
          </h2>
          <p>{company_name}</p>
          <div className="card-actions ">
            <div className="border border-[#7E90FE] px-4 py-2 text-lg text-[#7E90FE] font-semibold rounded-lg">{remote_or_onsite}</div> 
            <div className="border border-[#7E90FE] px-4 py-2 text-lg text-[#7E90FE] font-semibold rounded-lg">{job_type}</div>
          </div>
          <div className='flex gap-5'>
            <div className='flex items-center text-sm gap-3'>
              <CiLocationOn className='text-2xl'/>
              <p>{location}</p>
            </div>
            <div className='flex items-center text-sm gap-3'>
                <CiDollar className='text-2xl'/>
                <p>Slary:{salary}</p>
            </div>
          </div>
        <div className=''>  <Link to={`/job/${id}`}><button className='px-5 py-3 bg-[#7E90FE] rounded-lg text-white'>View details</button></Link></div>
        </div>
      </div>
    );
};

export default Job;