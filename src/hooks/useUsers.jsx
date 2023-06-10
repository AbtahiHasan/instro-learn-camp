import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../context/AuthProvider";

const useUsers = () => {
    const {axiosSecure} = useAxiosSecure()
    const {loading} = useAuth()
    const {data: users = []} = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    return {users}
    
};

export default useUsers;