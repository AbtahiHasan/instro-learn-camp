

const ClassCard = ({singleClass}) => {
    const {class_name, class_image, instructor_name,  instructor_email, avilable_seats, price} = singleClass
    return (
        <article className='p-4 border rounded-md shadow-md'>
            <img src={class_image} alt="" />
            <h2 className='text-xl font-bold my-2 text-center'>{class_name}</h2>
            <p className='text-center'><span className='font-bold'>instructor name: </span> {instructor_name}</p>
            <p className='text-center'><span className='font-bold'>instructor email: </span> {instructor_email}</p>
            <p className='text-center'><span className='font-bold'>avilable seats: </span> {avilable_seats}</p>
            <p className='text-center'><span className='font-bold'>price: </span> {price}</p>
        </article>
    );
};

export default ClassCard;