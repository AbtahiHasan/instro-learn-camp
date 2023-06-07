import React from 'react';
import ClassCard from './ClassCard';
import Heading from './shared/Heading';
import useClasses from '../../hooks/useClasses';

const PopularClasses = () => {
    const {classes} = useClasses("approved")
    return (
        <main className='mt-[140px] container'>
            <Heading title={"Popular Classes"}/>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    classes.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default PopularClasses;