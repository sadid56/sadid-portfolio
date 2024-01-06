
import { Outlet } from 'react-router-dom';
import Navber from '../shared/Navber/Navber';
import FooterNav from '../shared/FooterNav/FooterNav';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <FooterNav/>
        </div>
    );
};

export default Main;