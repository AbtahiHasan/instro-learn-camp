import { BsTrash3Fill } from "react-icons/bs";


const ClassTable = ({singleClass, i, setIsOpen, openFeed}) => {
    const {_id, class_image,class_name, instructor_email,instructor_name, avilable_seats, price} = singleClass
    return (
        
        <tr className="border-b-2 ">
            <td className="py-2 text-center font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={class_image} alt="" /></td>
            <td className="py-2 text-center">{class_name}</td>
            <td className="py-2 text-center">{instructor_email}</td>
            <td className="py-2 text-center">{instructor_name}</td>
            <td className="py-2 text-center">{avilable_seats}</td>
            <td className="py-2 text-center">${price}</td>
            <td className="py-2 text-center">
                <div>
                    <button className="bg-main px-6 py-2 rounded m-1 text-sm block mx-auto">Approved</button>
                    <button className="bg-main px-6 py-2 rounded m-1 text-sm block mx-auto">Denied</button>
                    <button onClick={() => openFeed(_id)} className="bg-main px-6 py-2 rounded m-1 text-sm block mx-auto">
                        Send Feedback
                    </button>
                </div>
            </td>
        </tr>
        
    );
};

export default ClassTable;