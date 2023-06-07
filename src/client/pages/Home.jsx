import useTitle from "../../hooks/useTitle";
import PopullarInstructors from "../components/PopularInstructors";


const Home = () => {
    useTitle("home")
    return (
        <main>
            <PopullarInstructors/>
        </main>
    );
};

export default Home;