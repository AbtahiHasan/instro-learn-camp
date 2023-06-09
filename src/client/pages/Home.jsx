import useTitle from "../../hooks/useTitle";
import Banner from "../components/Banner";
import PopularClasses from "../components/PopularClasses";

import PopullarInstructors from "../components/PopularInstructors";
import WhyChoose from "../components/WhyChoose";


const Home = () => {
    useTitle("home")
    return (
        <main>
            <Banner/>
            <PopullarInstructors/>
            <PopularClasses/>
            <WhyChoose/>
        </main>
    );
};

export default Home;