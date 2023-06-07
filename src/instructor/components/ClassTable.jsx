import { BsTrash3Fill } from "react-icons/bs";

const ClassTable = ({singleClass, i }) => {
    const {_id, photo_url,name, email, role} = singleClass
    return (
        
        <tr className="border-b-2 ">
            <td className="py-2 text-center font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={photo_url} alt="" /></td>
            <td className="py-2 text-center">{name}</td>
            <td className="py-2 text-center">{email}</td>
            <td>
                <select defaultValue={role} className="w-[80%] p-4 outline-none" name="" id="">
                    <option value="user">User</option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Admin</option>
                </select>
            </td>
            <td className="py-2"><button onClick={() => deleteUser(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill/></button></td>
        </tr>
        
    );
};

export default ClassTable;