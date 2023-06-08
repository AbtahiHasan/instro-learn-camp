import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../components/ClassCard';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useAuth } from '../../context/AuthProvider';

const Classes = () => {
    const {user} = useAuth()
    const {classes} = useClasses("approved")
    const {axiosSecure} = useAxiosSecure()
    const seletedClass = async (singleClass) => {


        const addToClass = {
            class_id: singleClass._id,
            class_name : singleClass.class_name,
            class_image : singleClass.class_image,
            instructor_name : singleClass.instructor_name,
            instructor_email : singleClass.instructor_email,
            price : singleClass.price,
            email: user?.email
        }

        console.log("21" ,addToClass)
        const res = await axiosSecure.post("/select-class", addToClass)
        console.log(res.data)
    }
    return (
        <main className='mt-[140px] container'>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    classes.map(singleClass => <ClassCard key={singleClass._id} seletedClass={seletedClass} singleClass={singleClass} />)
                }
            </div>
        </main>
    );
};

export default Classes;