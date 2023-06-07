import useMyClasses from "../../hooks/useMyClasses";

const MyClasses = () => {
    const {myClasses} = useMyClasses()
    console.log(myClasses)
    return (
        <div>
            MyClasses
        </div>
    );
};

export default MyClasses;