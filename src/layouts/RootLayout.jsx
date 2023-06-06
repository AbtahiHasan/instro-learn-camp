import { Outlet } from 'react-router-dom';
import Navbar from '../client/components/shared/Navbar';
import Footer from '../client/components/shared/Footer';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <div  className='min-h-[calc(100vh-136px)]'>

            <Outlet/>
            </div>
            <Footer/>
        </main>
    );
};

export default RootLayout;