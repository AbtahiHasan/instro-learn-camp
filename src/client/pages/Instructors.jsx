import React from 'react';
import InstructorCard from '../components/InstructorCard';
import useIntructors from '../../hooks/useIntructors';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
    useTitle("Instructors")
    const {instructors} = useIntructors()
    return (
        <section className="container mt-[140px]">
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}/>)
                }
            </div>
        </section>
    );
};

export default Instructors;