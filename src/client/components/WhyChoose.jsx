import { Link } from "react-router-dom";

const WhyChoose = () => {
    return (
        <div className="container mt-[140px]">
            <h2 className="text-3xl font-bold text-center my-4">WHY CHOOSE ME AS YOUR TEACHER</h2>
            <p className="md:w-[70%] mx-auto text-justify">I've been playing, writing, and recording for more years than I can count! I started JustinGuitar in 2003 - but began teaching way before that. I've been involved in all kind of projects and have worked as a 'sideman' for many artists. Justin "the artist" and Justin "the teacher" are the same person. Making music and teaching the world how to play guitar for free is what I'll do forever.</p>
            <div className="md:w-[60%] mx-auto grid grid-cols-3 mt-10 gap-10">
                <div className="md:border-r-2 p-3 text-center flex justify-center items-center flex-col">
                    <h3 className="text-xl">6+ YEARS</h3>
                    <p>Online Lessons</p>
                </div>
                <div className="border-t-2 md:border-t-0 md:border-r-2 p-3 text-center flex justify-center items-center flex-col">
                    <h3 className="text-xl">2,000+</h3>
                    <p>Performances</p>
                </div>
                <div className="border-t-2 md:border-none text-center flex justify-center items-center flex-col">
                    <h3 className="text-xl">16+ YEARS</h3>
                    <p>Teaching</p>
                </div>
                
            </div>

            <Link to="/"><button className="bg-main block mx-auto px-6 py-3 rounded-full text-white mt-16">LEARN MORE</button></Link>
        </div>
    );
};

export default WhyChoose;