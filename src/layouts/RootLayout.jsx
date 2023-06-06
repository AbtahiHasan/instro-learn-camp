import { Outlet } from 'react-router-dom';
import Navbar from '../client/components/shared/Navbar';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    );
};

export default RootLayout;