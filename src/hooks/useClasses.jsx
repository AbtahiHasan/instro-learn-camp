import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = (status) => {
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?status=${status}`)
            return res.data
        }
    })
    return {classes}
};

export default useClasses;