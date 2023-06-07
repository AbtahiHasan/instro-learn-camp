
import { useQuery } from 'react-query';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useMyClasses = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = [], refetch} = useQuery({
        queryKey: ["my_classes", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-classes?email=${user?.email}`)
            return res.data
        }
    })
    return {classes, refetch}
};

export default useMyClasses;