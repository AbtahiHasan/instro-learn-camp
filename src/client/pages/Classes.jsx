import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../components/ClassCard';

const Classes = () => {
    const {classes} = useClasses("approved")
    return (
        <main>
            <div>
                {
                    classes.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default Classes;