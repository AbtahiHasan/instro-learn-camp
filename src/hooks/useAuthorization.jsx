import { useQuery } from "react-query";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAuthorization = () => {
    const {axiosSecure} = useAxiosSecure()
    const {user} = useAuth()
    const {data : role} = useQuery({
        queryKey: ["authorization", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/authorization?email=${user?.email}`)
            return res.data.role
        }
    })
    return {role}
};

export default useAuthorization;