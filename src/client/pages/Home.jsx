import useTitle from "../../hooks/useTitle";
import Banner from "../components/Banner";
import GetUpdated from "../components/GetUpdated";
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
            <GetUpdated/>
        </main>
    );
};

export default Home;