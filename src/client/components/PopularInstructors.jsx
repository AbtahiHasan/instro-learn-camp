import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorCard from "./InstructorCard";
import Heading from "./shared/Heading";


const PopularInstructors = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: instructors = []} = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/instructors")
            return res.data
        }
    })
    return (
        <section className="container mt-[140px]">
            <Heading title="Popular Instructors" />
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}/>)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;