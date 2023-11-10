import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Job from '../Job/Job';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CategoryList props={{title:'Job Category List',details:'this is a title'}}
        //    details={'this is a title'}
           >

           </CategoryList>
           <CategoryList props={{title:'Featured Jobs', details:'Explore thousand job opportunaity with the all information you need '}}></CategoryList>

        <FeaturedJobs></FeaturedJobs>
      
        </div>
    );
};

export default Home;