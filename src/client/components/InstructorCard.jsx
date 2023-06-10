import {motion} from "framer-motion"



const InstructorCard = ({instructor}) => {
    const {name, image, email} = instructor
    return (
        <motion.article 
            initial={{opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1}}
            transition={{type: 'spring', stiffness: 120}}
         className="text-center border-2 shadow-md rounded p-4">           
            <div className="relative overflow-hidden h-[200px]">
                <motion.img 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 120}}
                
                className="w-full" src={image} alt="" />
                <div className="bg-main absolute bottom-0 h-[150px] w-full -z-10"></div>
            </div>
            <h3 className="font-bold text-2xl my-2">{name}</h3>
            <p>{email}</p>
        </motion.article>
    );
};

export default InstructorCard;