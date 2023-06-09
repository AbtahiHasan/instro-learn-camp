import React from 'react';
import ClassCard from './ClassCard';
import Heading from './shared/Heading';
import usePopularClasses from '../../hooks/usePopularClasses';

const PopularClasses = () => {
    const {popularClasses} = usePopularClasses()
    return (
        <main className='mt-[140px] container'>
            <Heading title={"Popular Classes"}/>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                   popularClasses && popularClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default PopularClasses;