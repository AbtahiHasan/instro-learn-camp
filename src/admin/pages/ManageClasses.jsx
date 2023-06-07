import Swal from 'sweetalert2';
import useUsers from '../../hooks/useUsers';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import UserTable from '../components/UserTable';
import useClasses from '../../hooks/useClasses';
import ClassTable from '../components/ClassTable';

const ManageClasses = () => {
    const { classes} = useClasses("all")

    
   
    return (
        <main className='h-screen overflow-hidden'>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Classes: {classes.length > 0 ?  classes.length : 0}</h3>
            </div>
            <section  className='bg-white  h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-main sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3 lowercase'>CLASS IMAGE</th>
                            <th className='py-3 lowercase'>CLASS NAME</th>
                            <th className='py-3 lowercase'>INSTRUCTOR EMAIL</th>
                            <th className='py-3 lowercase'>INSTRUCTOR NAME</th>
                            <th className='py-3 lowercase'>AVAILAVLE SEATS</th>
                            <th className='py-3 lowercase'>PRICE</th>
                            <th className='py-3 lowercase'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            classes && classes.map((singleClass, i) => <ClassTable key={singleClass._id} i={i} singleClass={singleClass}  />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ManageClasses;