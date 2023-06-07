

const Heading = ({title}) => {
    return (
        <div className="border-2 border-main w-1/2 mx-auto rounded-tl-full rounded-br-full my-8">
            <h2 className="text-4xl text-center  font-bold text-main p-2">{title}</h2>
        </div>
    );
};

export default Heading;