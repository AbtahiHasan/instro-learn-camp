

const InstructorCard = ({instructor}) => {
    const {name, image, email} = instructor
    return (
        <article className="text-center border-2 shadow-md rounded p-4">           
            <div className="relative">
                <img className="w-full " src={image} alt="" />
                <div className="bg-main absolute bottom-0 h-[150px] w-full -z-10"></div>
            </div>
            <h3 className="font-bold text-2xl my-2">{name}</h3>
            <p>{email}</p>
        </article>
    );
};

export default InstructorCard;