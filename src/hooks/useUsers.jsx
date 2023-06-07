import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: users = []} = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    return {users}
    
};

export default useUsers;