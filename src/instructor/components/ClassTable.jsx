

const ClassTable = ({singleClass, i }) => {
    const {_id, photo_url,name, email, status} = singleClass
    return (
        
        <tr className="border-b-2 ">
            <td className="py-2 text-center font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={photo_url} alt="" /></td>
            <td className="py-2 text-center">{name}</td>
            <td className="py-2 text-center">{status}</td>
            
           
        </tr>
        
    );
};

export default ClassTable;