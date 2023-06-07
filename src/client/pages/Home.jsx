import useTitle from "../../hooks/useTitle";
import Banner from "../components/Banner";
import PopularClasses from "../components/PopularClasses";

import PopullarInstructors from "../components/PopularInstructors";


const Home = () => {
    useTitle("home")
    return (
        <main>
            <Banner/>
            <PopullarInstructors/>
            <PopularClasses/>
        </main>
    );
};

export default Home;