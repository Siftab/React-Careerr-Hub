import React from 'react';

const CategoryList = ({props}) => {
   const {title,details} = props;
    return (
        <div >
             <h1 className='text-5xl my-3'>{title}</h1>
             <p >{details}</p>
        </div>
    );
};

export default CategoryList; 