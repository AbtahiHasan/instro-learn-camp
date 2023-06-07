import { BsTrash3Fill } from "react-icons/bs";
// import userImage from "/icon/user.svg"
// import admin from "/icon/admin.png"

const ClassTable = ({singleClass, i, }) => {
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
        </tr>
        
    );
};

export default ClassTable;