
const GetUpdated = () => {
    return (
        <section className="container mt-[140px] flex justify-center flex-col items-center px-3 bg-[#00000025] p-10">
            <h2 className="text-4xl  font-bold uppercase">Newsletter</h2>
            <p className="my-3">Join Our Community: Receive Exclusive Content and Updates</p>
            <div className="flex justify-center md:w-[60%] w-[95%] flex-col md:flex-row">
                <input type="text" className="px-4 py-2 w-full  md:w-[80%] rounded outline-0" placeholder="example@gmail.com"/>
                <button className="bg-main px-6 py-2 rounded text-white mt-3 md:mt-0 w-full md:w-[20%]">Subscribe</button>
            </div>
        </section>
    );
};

export default GetUpdated