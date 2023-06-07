import Swal from 'sweetalert2';
import useUsers from '../../hooks/useUsers';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import UserTable from '../components/UserTable';

const ManageUsers = () => {
    const {refetchUser, users} = useUsers()
    const {axiosSecure} = useAxiosSecure()
    const deleteUser = (id) => {        
                Swal.fire({
                    title: 'Are you sure?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/delete-user/${id}`)
                        .then(data => {
                            if(data.data.deletedCount > 0) {
                                refetchUser()
                                Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                      )
                                }
                         })
 
                    }
                  })
           
        
    }


   
    return (
        <main className='h-screen overflow-hidden'>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Users: {users.length > 0 ?  users.length : 0}</h3>
            </div>
            <section  className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='bg-main sticky top-0 px-10'>
                            <th className='py-3  text-white'></th>
                            <th className='py-3  text-white'>USER IMAGE</th>
                            <th className='py-3  text-white'>NAME</th>
                            <th className='py-3  text-white'>EMAIL</th>
                            <th className='py-3  text-white'>ROLE</th>
                            <th className='py-3  text-white'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            users && users.map((user, i) => <UserTable key={user._id} i={i} user={user} deleteUser={deleteUser} />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ManageUsers;