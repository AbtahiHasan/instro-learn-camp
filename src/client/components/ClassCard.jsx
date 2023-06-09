import useAuthorization from "../../hooks/useAuthorization";


const ClassCard = ({singleClass, seletedClass}) => {
    const {role} = useAuthorization()
    const {class_name, class_image, instructor_name,  instructor_email, avilable_seats, price} = singleClass
    return (
        <article className={`${avilable_seats === 0 ? "bg-red-950 bg-opacity-40": ""} p-4 border rounded-md shadow-md`}>
            <img src={class_image} alt="" />
            <h2 className='text-xl font-bold my-2 text-center'>{class_name}</h2>
            <p className='text-center'><span className='font-bold'>instructor name: </span> {instructor_name}</p>
            <p className='text-center'><span className='font-bold'>instructor email: </span> {instructor_email}</p>
            <p className='text-center'><span className='font-bold'>avilable seats: </span> {avilable_seats}</p>
            <p className='text-center'><span className='font-bold'>price: </span> ${price}</p>
            <button disabled={role === "admin" || role === "instructor" || avilable_seats === 0} onClick={() => seletedClass(singleClass)} className={`${role === "admin" || role === "instructor" || avilable_seats === 0 ? "opacity-25 cursor-not-allowed" : ""} bg-main px-8 py-2 rounded text-white mx-auto block my-4`}>Select</button>
        </article>
    );
};

export default ClassCard;