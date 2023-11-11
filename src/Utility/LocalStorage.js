const getStoredApplications=()=>{
    const storedApplication = localStorage.getItem('job-Applications');
 if(storedApplication){
    return JSON.parse(storedApplication)
 }
 return [];
}
const savedJobApplication=(id)=>{
    const storedApplication=getStoredApplications();
    const exist = storedApplication.find(appId=> appId === id);
    if(!exist)
    {
        storedApplication.push(id);
        localStorage.setItem('job-Applications',JSON.stringify(storedApplication))
    }
}

export {getStoredApplications,savedJobApplication}